import logging
import random
import string
from datetime import datetime, timedelta

import docker
from docker.errors import NotFound
from flask import Blueprint, g, request, send_from_directory
from sqlalchemy import desc, func

from app.core.api import api_fail, api_success
from app.core.decorators import user_required
from app.core.tools import get_ip
from app.docker.service import start_docker_resource
from app.extensions import db
from app.frontend import services, tasks
from app.models.admin import Config, Notice
from app.models.ctf import Answer, Attachment, CtfResource, Question
from app.models.user import User
from app.utils.security import check_password, create_token, hash_password

bp = Blueprint("view", __name__, url_prefix="/api")

logger = logging.getLogger(__name__)


@bp.get("/upload/<path:filename>")
def send_upload_file(filename):
    name = request.args.get("filename")
    manager_folder = "upload"
    return send_from_directory(manager_folder, filename, as_attachment=True, download_name=name)


def generate_flag():
    """
    生成flag
    return generate flag
    """
    rd_str = "".join(random.sample(string.ascii_letters + string.digits, 32))
    return "flag{ocean%s}" % rd_str


@bp.post("/login")
def login():
    """
    用户登录
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    user = db.session.query(User).filter(User.username == username).one_or_none()
    if user and check_password(user.password, password):
        token = create_token()
        user.token = token
        db.session.commit()
        return api_success({"token": token})
    else:
        return api_fail(msg="用户名不存在或密码错误!")


@bp.get("/info")
@user_required()
def info():
    """
        获取用户信息
    :return:
    """
    user = g.user
    data = {"username": user.username, "id": user.id}

    return api_success({"data": data})


@bp.route("/register", methods=["get", "post"])
def register():
    """
    用户注册
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    if not all([username, password]):
        return api_fail(msg="用户名或密码不允许为空")
    user = db.session.query(User).filter(User.username == username).one_or_none()
    if user:
        return api_fail(msg="该用户名已注册")
    token = create_token()
    user = User(username=username, password=hash_password(password), active=True, token=token)
    db.session.add(user)
    db.session.commit()

    return api_success()


@bp.post("/logout")
@user_required()
def logout():
    """
    用户登出
    """
    user = g.user
    user.token = None
    db.session.commit()
    return api_success()


@bp.post("/rest_pass")
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
    if not check_password(user.password, old_password):
        return api_fail(msg="当前密码不匹配")
    # 校验密码规则
    user.password = hash_password(password)
    # 推出登录
    # user.token = None
    db.session.commit()
    return api_success()


@bp.get("/challenge")
@user_required(required=False)
def challenge_list():
    """
        题目列表
    :return:
    """
    user = g.user
    if user:
        solved = [
            i[0]
            for i in db.session.query(Answer.question_id).filter(
                Answer.user_id == user.id, Answer.status == Answer.status_ok
            )
        ]
    else:
        solved = []
    # 每个题目的解题人数
    solved_query = (
        db.session.query(Answer.question_id, func.count(Answer.id))
        .filter(Answer.status == Answer.status_ok)
        .group_by(Answer.question_id)
        .all()
    )
    solved_cnt_dict = {i[0]: i[1] for i in solved_query}
    subjects = request.args.get("subject")
    query = db.session.query(Question).filter(Question.active.is_(True))
    if subjects:
        query = query.filter(Question.type == subjects)
    data = []
    for item in query:
        data.append(
            {
                "id": item.id,
                "type": item.type,
                "name": item.name,
                "score": item.score,
                "desc": item.desc,
                "active_flag": item.active_flag,
                "solved_cnt": solved_cnt_dict.get(item.id, 0),
                "is_solved": bool(item.id in solved),
            }
        )
    return api_success({"data": data})


@bp.get("/challenge/<int:question>")
@user_required()
def challenge_detail(question):
    """
        题目详情 包括已解决的用户情况  点赞情况
    :param question:
    :return:
    """
    instance = db.session.query(Question).get(question)
    if not instance:
        return api_fail(msg="题目不存在、请刷新页面！")
    answer_object = (
        db.session.query(Answer)
        .filter(
            Answer.user_id == g.user.id,
            Answer.status == Answer.status_ok,
            Answer.question_id == question,
        )
        .first()
    )

    # 获取前三名
    ans = (
        db.session.query(User.username)
        .select_from(Answer)
        .filter(
            Answer.question_id == question,
            Answer.status == Answer.status_ok,
        )
        .join(User, User.id == Answer.user_id)
    )
    ans = [i[0] for i in ans][:3]
    ans = list(ans) + [None] * (3 - len(list(ans)))
    first_blood, second_blood, third_blood = ans
    resource = (
        db.session.query(CtfResource)
        .filter(
            CtfResource.user_id == g.user.id,
            CtfResource.question_id == instance.id,
            CtfResource.destroy_time > datetime.now(),
        )
        .first()
    )
    ip = Config.get_config(Config.KEY_IP)
    if resource:
        urls = []
        for origin, port in resource.docker_runner.port_info.items():
            urls.append({"url": "http://{}:{}".format(ip, port), "origin": origin})

        container_data = {
            "timeout": (resource.destroy_time - resource.updated_at).total_seconds(),
            "create_time": resource.updated_at.strftime("%Y-%m-%d %H:%M:%S"),
            "urls": urls,
        }
    else:
        container_data = None

    get_score = answer_object.score if answer_object else None
    if instance.attachment:
        attachment = instance.attachment.split(",")
        attachment_query = db.session.query(Attachment).filter(Attachment.id.in_(attachment))
        attachment_info = [
            {"filename": i.filename, "uuid": i.id, "file_path": i.file_path}
            for i in attachment_query
        ]
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
            {
                "name": i["filename"],
                "url": "/api/upload/{}?filename={}".format(i["file_path"], i["filename"]),
            }
            for i in attachment_info
        ],
        "desc": instance.desc,
        "active_flag": instance.active_flag,
        "type": instance.type,
        "solved": db.session.query(Answer)
        .filter(Answer.question_id == instance.id, Answer.status == Answer.status_ok)
        .count(),
        "date_created": instance.updated_at.strftime("%y-%m-%d"),
    }
    return api_success({"data": data})


@bp.post("/challenge/<int:question>/start")
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
        return api_fail(msg="静态题库无需动态生成")
    if not instance.resource_id or not instance.active_flag:
        return api_fail(msg="服务器没有资源")
    flag = generate_flag()
    logger.info(flag)
    try:
        docker_runner = start_docker_resource(instance.resource_id, user.id, flag=flag)
    except ValueError as e:
        logger.exception(e)
        return api_fail(msg=str(e))
    sec = Config.get_config(Config.KEY_CTF_TIMEOUT)
    obj = CtfResource(
        docker_runner_id=docker_runner.id,
        flag=flag,
        user_id=user.id,
        question_id=instance.id,
        destroy_time=datetime.now() + timedelta(seconds=sec),
    )
    db.session.add(obj)
    db.session.flush()
    db.session.commit()
    # 延迟清除
    tasks.ctf_finish_container.apply_async(args=(obj.id,), countdown=sec + 1)
    return api_success({})


@bp.post("/challenge/<int:question>/delayed")
@user_required()
def question_delayed(question):
    """
        延长容器时间
    :param question:
    :return:
    """
    container = (
        db.session.query(CtfResource)
        .filter(CtfResource.user_id == g.user.id, CtfResource.question_id == question)
        .order_by(CtfResource.id.desc())
        .first()
    )
    if not container:
        return api_fail(msg="当前状态无法延长题目时间")
    # 最多延长三小时
    if (container.destroy_time - timedelta(hours=3)) > datetime.now():
        return api_fail(msg="时间已达上限")
    container.destroy_time = container.destroy_time + timedelta(minutes=10)
    container.save()
    return api_success()


@bp.post("/challenge/<int:question>/destroy")
@user_required()
def question_destroy(question):
    """
        销毁容器
    :param question:
    :return:
    """
    instance = db.session.query(Question).get(question)
    if not instance.active_flag:
        return api_fail("静态题库无需动态生成")
    ctf_resource = (
        db.session.query(CtfResource)
        .filter(CtfResource.question_id == instance.id, CtfResource.user_id == g.user.id)
        .first()
    )
    if not ctf_resource:
        return api_fail(msg="环境已销毁")

    client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
    # 默认一个docker run 只能绑定一个用户吧 所以直接删除docker run  采用数据库的连表删除自动删除其他索引
    try:
        container = client.containers.get(ctf_resource.docker_runner.container_id)
        container.stop()
        container.remove()
    except NotFound:
        logger.warning("环境异常:{}".format(ctf_resource.docker_runner.container_id))
    docker_run = ctf_resource.docker_runner
    db.session.delete(ctf_resource)
    db.session.delete(docker_run)
    db.session.commit()
    return api_success()


@bp.post("/user")
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
        return api_fail("用户名已被占用")
    user.username = username
    db.session.commit()
    return api_success()


@bp.post("challenge/submit")
@user_required()
def challenge_submit():
    ip = get_ip()
    data = request.get_json()
    question_id = data.get("id")
    flag = data.get("flag", "").strip()
    # 判断是否有提交记录
    challenge = Question.get_by_id(question_id)
    answer = (
        db.session.query(Answer)
        .filter(
            Answer.question_id == question_id,
            Answer.status == Answer.status_ok,
            Answer.user_id == g.user.id,
        )
        .count()
    )
    if answer:
        return api_fail(msg="请勿重复提交")
    #  判断是否是别人的答案
    copy_resource = (
        db.session.query(CtfResource)
        .filter(CtfResource.flag == flag, CtfResource.user_id != g.user.id)
        .one_or_none()
    )
    if copy_resource:
        # todo 添加作弊记录
        Answer.create(
            question_id=question_id, user_id=g.user.id, flag=flag, ip=ip, status=Answer.status_cheat
        )
        return api_fail(msg="检测到作弊、本次答题无效!")
    current_ctf_resource = None
    if challenge.active_flag:
        current_ctf_resource = (
            db.session.query(CtfResource)
            .filter(CtfResource.user_id == g.user.id, CtfResource.question_id == question_id)
            .order_by(CtfResource.updated_at.desc())
            .first()
        )
        if current_ctf_resource:
            ok_flag = current_ctf_resource.flag.strip()
        else:
            return api_fail(msg="当前状态无法作答、请启动环境!")
    else:
        ok_flag = challenge.flag.strip()
    if ok_flag == flag:
        Answer.create(
            question_id=question_id,
            user_id=g.user.id,
            flag=flag,
            ip=ip,
            status=Answer.status_ok,
            score=challenge.score,
        )
        if current_ctf_resource:
            # 停止容器
            tasks.ctf_finish_container.apply_async(
                args=(current_ctf_resource.id,), kwargs={"current": True}
            )

        return api_success(msg="答案正确、获得{}积分".format(challenge.score))
    else:
        Answer.create(
            question_id=question_id, user_id=g.user.id, flag=flag, ip=ip, status=Answer.status_error
        )
        return api_fail(msg="答案错误")


@bp.get("notice")
def notice():
    """
    公告列表
    """
    # 公告
    notices = []
    query = db.session.query(Notice)
    query = query.filter(Notice.active.is_(True))
    notice_query = query.order_by(desc(Notice.is_top), desc(Notice.id)).all()
    for item in notice_query:
        notices.append(
            {
                "id": item.id,
                "is_top": item.is_top,
                "content": item.content,
                "create_time": item.updated_at.strftime("%Y-%m-%d %H:%M"),
            }
        )
    return api_success({"data": notices})


@bp.get("rank/score")
def score_rank():
    """
    积分排行
    """
    # 公告
    code, data = services.score_rank(**request.args)
    return api_success(data=data)
