import random
import string
import time
from datetime import datetime, timedelta

import docker
from docker.errors import NotFound
from flask import Blueprint, render_template, request, make_response, g, send_from_directory
from sqlalchemy import func, desc
from sqlalchemy.exc import IntegrityError
from werkzeug.security import check_password_hash, generate_password_hash

from app import db, scheduler
from app.api.docker.service import start_docker_resource
from app.api.frontend import services
from app.lib.decorators import login_required, user_required
from app.lib.rest_response import fail, success
from app.lib.tools import get_ip
from app.lib.utils.authlib import create_token
from app.models.admin import Notice, Config
from app.models.ctf import ImageResource, CtfResource, Answer, Question, Attachment
from app.api.docker import task
from app.models.user import User
import logging

from config import config

bp = Blueprint("view", __name__, url_prefix='/api')

logger = logging.getLogger(__name__)


@bp.get('/upload/<path:filename>')
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


@bp.get('/')
@login_required()
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
        containers = db.session.query(CtfResource, ImageResource.question_id) \
            .join(ImageResource, ImageResource.id == CtfResource.image_resource_id
                  ) \
            .join(User, User.id == CtfResource.user_id).order_by(desc(CtfResource.id)).all()
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


@bp.post('/login')
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
        return fail(msg="用户名不存在或密码错误!")


@bp.get('/info')
@user_required()
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


@bp.post('/logout')
@user_required()
def logout():
    """
    用户登出
    """
    user = g.user
    user.token = None
    db.session.commit()
    return success()


@bp.post('/rest_pass')
@user_required()
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


@bp.get('/challenge')
@user_required(required=False)
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


@bp.get('/challenge/<int:question>')
@user_required()
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

    # 获取前三名
    ans = db.session.query(User.username).select_from(Answer).filter(Answer.question_id == question,
                                                                     Answer.status == Answer.status_ok,
                                                                     Answer.rank <= 3).join(User,
                                                                                            User.id == Answer.user_id)
    ans = [i[0] for i in ans]
    ans = list(ans) + [None] * (3 - len(list(ans)))
    first_blood, second_blood, third_blood = ans
    resource = db.session.query(CtfResource).filter(CtfResource.user_id == g.user.id,
                                                    CtfResource.question_id == instance.id,
                                                    CtfResource.destroy_time > datetime.now()).first()
    ip = Config.get_config(Config.KEY_IP)
    if resource:
        urls = []
        for origin, port in resource.docker_runner.port_info.items():
            urls.append({
                "url": "http://{}:{}".format(ip, port),
                "origin": origin
            })

        container_data = {
            "timeout": (resource.destroy_time - resource.date_created).total_seconds(),
            "create_time": resource.date_created.strftime("%Y-%m-%d %H:%M:%S"),
            "urls": urls,
        }
    else:
        container_data = None

    get_score = answer_object.score if answer_object else None
    if instance.attachment:
        attachment = instance.attachment.split(",")
        attachment_query = db.session.query(Attachment).filter(Attachment.id.in_(attachment))
        attachment_info = [{"filename": i.filename, "uuid": i.id, "file_path": i.file_path} for i in attachment_query]
    else:
        attachment_info = []
    data = {
        "first_blood": first_blood,
        "second_blood": second_blood,
        "third_blood": third_blood,
        "container": container_data,
        "get_score": get_score,
        "score": instance.score,
        "id": instance.id,
        "name": instance.name,
        "attachment": [
            {"name": i["filename"], "url": "/api/upload/{}?filename={}".format(i["file_path"], i["filename"])} for i
            in attachment_info],
        "desc": instance.desc,
        "active_flag": instance.active_flag,
        "type": instance.type,
        "solved": db.session.query(Answer).filter(Answer.question_id == instance.id,
                                                  Answer.status == Answer.status_ok).count(),
        "date_created": instance.date_created.strftime("%y-%m-%d")
    }
    return success(data)


@bp.post('/challenge/<int:question>/start')
@user_required()
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
    if not instance.resource_id or not instance.active_flag:
        return fail(msg="服务器没有资源")
    flag = generate_flag()
    logger.info(flag)
    try:
        docker_runner = start_docker_resource(instance.resource_id, user.id, flag=flag)
    except ValueError as e:
        logger.exception(e)
        return fail(msg=str(e))
    CtfResource.create(
        docker_runner_id=docker_runner.id,
        flag=flag,
        user_id=user.id,
        question_id=instance.id,
        destroy_time=datetime.now() + timedelta(seconds=Config.get_config(Config.KEY_CTF_TIMEOUT))
    )
    return success({})


@bp.post('/challenge/<int:question>/delayed')
@user_required()
def question_delayed(question):
    """
        延长容器时间
    :param question:
    :return:
    """
    container = db.session.query(CtfResource).filter(CtfResource.user_id == g.user.id,
                                                     CtfResource.question_id == question).order_by(
        desc(CtfResource.id)).first()
    if not container:
        return fail(msg="当前状态无法延长题目时间")
    # 最多延长三小时
    if (container.destroy_time - timedelta(hours=3)) > datetime.now():
        return fail(msg="时间已达上限")
    container.destroy_time = container.destroy_time + timedelta(minutes=10)
    container.save()
    return success()


@bp.post('/challenge/<int:question>/destroy')
@user_required()
def question_destroy(question):
    """
        销毁容器
    :param question:
    :return:
    """
    instance = db.session.query(Question).get(question)
    if not instance.active_flag:
        return fail("静态题库无需动态生成")
    ctf_resources = db.session.query(CtfResource).filter(CtfResource.question_id == instance.id,
                                                         CtfResource.user_id == g.user.id)
    for ctf_resource in ctf_resources:
        client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
        try:
            container = client.containers.get(ctf_resource.docker_runner.container_id)
            container.stop()
            container.remove()
        except NotFound:
            continue
        finally:
            docker_runner = ctf_resource.docker_runner
            ctf_resource.delete()
            try:
                docker_runner.delete()
            except IntegrityError:
                db.session.rollback()
    return success()


@bp.post('/user')
@user_required()
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


@bp.post('challenge/submit')
@user_required()
def challenge_submit():
    ip = get_ip()
    data = request.get_json()
    question_id = data.get("id")
    flag = data.get("flag")
    # 判断是否有提交记录
    challenge = Question.get_by_id(question_id)
    answer = db.session.query(Answer).filter(Answer.question_id == question_id, Answer.status == Answer.status_ok,
                                             Answer.user_id == g.user.id).count()
    if answer:
        return fail(msg="请勿重复提交")
    #  判断是否是别人的答案
    copy_resource = db.session.query(CtfResource).filter(CtfResource.flag == flag,
                                                         CtfResource.user_id != g.user.id).one_or_none()
    if copy_resource:
        # todo 添加作弊记录
        Answer.create(question_id=question_id, user_id=g.user.id, flag=flag, ip=ip, status=Answer.status_cheat)
        return fail(msg="检测到作弊、本次答题无效!")
    if challenge.active_flag:
        current_ctf_resource = db.session.query(CtfResource).filter(CtfResource.user_id == g.user.id,
                                                                    CtfResource.question_id == question_id).order_by(
            CtfResource.date_modified.desc()).first()
        if current_ctf_resource:
            ok_flag = current_ctf_resource.flag
        else:
            return fail(msg="当前状态无法作答、请启动环境!")
    else:
        ok_flag = challenge.flag
    if ok_flag == flag:
        Answer.create(question_id=question_id, user_id=g.user.id, flag=flag, ip=ip, status=Answer.status_ok,
                      score=challenge.score)
        return success(msg="答案正确、获得{}积分".format(challenge.score))
    else:
        Answer.create(question_id=question_id, user_id=g.user.id, flag=flag, ip=ip, status=Answer.status_error)
        return fail(msg="答案错误")


@bp.get('notice')
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


@bp.get('rank/score')
def score_rank():
    """
        积分排行
    """
    # 公告
    code, data = services.score_rank(**request.args)
    return success(data=data)
