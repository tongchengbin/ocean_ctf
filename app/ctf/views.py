import logging
import os
import uuid
import docker
from docker import errors as docker_error
from docker.errors import DockerException
from flask import Blueprint, request
from flask import current_app
from app.ctf.form import QuestionForm
from app.docker.service import destroy_docker_runner
from app.lib.api import api_fail, api_success
from config import config
from app.extensions import db
from app.models.ctf import QType, ImageResource, CtfResource, Answer, Attachment
from app.models.ctf import Question
from app.models.docker import Host
from app.models.user import User
from app.ctf.tasks import build_question_tar
from flask_pydantic import validate

logger = logging.getLogger('app')
bp = Blueprint("admin_ctf", __name__, url_prefix="/api/admin/ctf")


@bp.route('/question/type', methods=['get'])
def question_type():
    """
        题库列表
    :return:
    """
    data = [i.value for i in QType]
    return api_success({"data": data})


@bp.route('/resource', methods=['get'])
def resource_list():
    """
    :return : 已生成题目容器
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    username = request.args.get("username")
    question_name = request.args.get("question")
    query = db.session.query(CtfResource, Question, User).join(User, CtfResource.user_id == User.id).join(
        Question, Question.id == CtfResource.question_id)
    if username:
        query = query.filter(User.username.ilike("%{}%".format(username)))
    if question_name:
        query = query.filter(Question.name.ilike("%{}%".format(question_name)))
    page = query.order_by(CtfResource.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        resource, question, user_obj = item
        data.append({
            "id": resource.id,
            "name": resource.docker_runner.name,
            "date_created": resource.date_created.strftime(
                "%Y-%m-%d %H:%M:%S") if resource.date_created else None,
            "date_modified": resource.date_modified.strftime(
                "%Y-%m-%d %H:%M:%S") if resource.date_modified else None,
            "container_port": resource.docker_runner.port_info,
            "flag": resource.flag,
            "destroy_time": resource.destroy_time.strftime(
                "%Y-%m-%d %H:%M") if resource.destroy_time else None,
            "username": user_obj.username,
            "question": {
                "name": question.name
            }
        })
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.put('/question/<int:pk>')
def question_update(pk):
    """
                    修改题目
                :param question: 题目ID
                :return:
                @param pk:
                """
    data = request.get_json()
    instance = db.session.query(Question).get(pk)
    name = data.get("name")
    _type = data.get("type")
    active_flag = data.get("active_flag")
    score = data.get("score")
    flag = data.get("flag")
    desc = data.get("desc")
    resource_id = data.get("resource_id") or None
    if active_flag is not None:
        instance.active_flag = active_flag
    if name is not None:
        instance.name = name
    if score is not None:
        instance.score = score
    if _type is not None:
        instance.type = _type
    if desc is not None:
        instance.desc = desc
    attachment = data.get('attachment', [])
    active = data.get("active")
    if active is not None:
        instance.active = active
    if active_flag:
        if not resource_id:
            return api_fail(msg="清选择环境资源")
    instance.resource_id = resource_id
    instance.attachment = ",".join([str(i) for i in attachment])
    if active_flag is not None:
        if not active_flag:
            instance.flag = flag
    db.session.commit()
    return api_success()


@bp.route('/containers/<int:container_resource>/refresh', methods=['post'])
def ctf_containers_refresh(container_resource):
    """
        刷新容器状态 数据库和实际容器状态同步
        :param :container_resource :题目容器
        :return
    """
    container = db.session.query(CtfResource).get(container_resource)
    question = container.question
    try:
        client = docker.DockerClient(question.host.docker_api)
        docker_container = client.containers.get(container.container_id)
    except docker_error.DockerException:
        container.container_status = "Outline".lower()
        db.session.commit()
        return api_fail(msg="容器不在线")
    container.container_status = docker_container.attrs["State"]["Status"].lower()
    db.session.commit()
    return api_success()


@bp.route('/resource/<int:pk>/remove', methods=['post'])
def resource_remove(pk):
    """
        删除题目容器 如果容器不在线需要自己手动删除
        :param :container_resource 题目容器id
        :return
    """
    ctf_resource = db.session.query(CtfResource).get(pk)
    destroy_docker_runner(ctf_resource.docker_runner_id)
    # docker runner 删除会自动删除外键关联的CTF 环境
    return api_success(msg="删除成功")


@bp.route('/answers', methods=['get'])
def answers_list():
    """
        答题记录
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    _type = request.args.get("q_type")
    status = request.args.get("status")
    question_name = request.args.get("question")
    username = request.args.get('username')
    query = db.session.query(Answer, Question, User) \
        .join(Question, Question.id == Answer.question_id) \
        .join(User, User.id == Answer.user_id)
    if _type:
        query = query.filter(Question.type == _type)
    if status:
        query = query.filter(Answer.status == status)
    if username:
        query = query.filter(User.username.contains(username))
    if question_name:
        query = query.filter(Question.name.contains(question_name))
    page = query.order_by(Answer.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        answer, question, user = item
        data.append({
            "id": answer.id,
            "date_created": answer.date_created.strftime("%Y-%m-%d %H:%M:%S") if answer.date_created else None,
            "date_modified": answer.date_modified.strftime("%Y-%m-%d %H:%M:%S") if answer.date_modified else None,
            "status": answer.status,
            "status_name": answer.status_name,
            "question": {
                "type": question.type,
                "name": question.name
            },
            "score": answer.score,
            "flag": answer.flag,
            "username": user.username,
            "ip": answer.ip
        })
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.route('/answers/status_list', methods=['get'])
def answer_status_list():
    """
        回答题目的类别
    """
    return api_success({"data": list(Answer.status_choices)})


@bp.route('/question', methods=['get'])
def question_list():
    """
        题库列表 和题库添加
        :data :subject 题目分类
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    subject = request.args.get("subject")
    search = request.args.get('search')
    query = db.session.query(Question).filter()
    if subject:
        query = query.filter(Question.type == subject)
    if search:
        query = query.filter(Question.name.contains(search))
    page = query.order_by(Question.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        if item.attachment:
            attachment = item.attachment.split(",")
            attachment_query = db.session.query(Attachment).filter(Attachment.id.in_(attachment))
            attachment_info = [{"filename": i.filename, "uuid": i.id} for i in attachment_query]
        else:
            attachment_info = []
        data.append({
            "resource_id": item.resource_id,
            "resource_name": item.resource.name if item.resource_id else None,
            "attachment": attachment_info,
            "id": item.id,
            "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
            "date_modified": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
            "name": item.name,
            'type': item.type,
            "active": item.active,
            "flag": item.flag,
            "active_flag": item.active_flag,
            "score": item.score,
            "desc": item.desc
        })
    return api_success({
        "total": page.total,
        "results": data
    })


@bp.post('/question')
@validate()
def question_create(body: QuestionForm):
    data = request.get_json()
    attachment = data.get('attachment', [])
    Question.create(name=body.name,
                    active=body.active,
                    active_flag=body.active_flag,
                    desc=body.desc,
                    flag=body.flag,
                    type=body.type,
                    score=body.score,
                    resource_id=body.resource_id,
                    attachment=",".join([str(i) for i in attachment]))
    return api_success({})


@bp.delete('/question/<int:pk>')
def question_delete(pk):
    """
                    删除题库  判断是否是动态题库 动态题库删除容器  实体容器 镜像
                    :param : question 题目ID
                """
    # 使用逻辑删除
    instance: Question = db.session.query(Question).get(pk)
    if instance.active_flag:
        containers = db.session.query(CtfResource).filter(CtfResource.question_id == instance.id)
        for container in containers:
            db.session.delete(container)
            client = docker.DockerClient(container.image.host.docker_api)
            docker_container = client.containers.get(container.container_id)
            docker_container.stop()
            container.status = 2
            db.session.commit()
    # 删除镜像
    instance.delete()
    return api_success({})


@bp.get('/images')
def images_list():
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    host_id = request.args.get('host')
    status = request.args.get('status')
    name = request.args.get('name')
    file = request.args.get('file')
    query = db.session.query(ImageResource)
    if host_id:
        query = query.filter(ImageResource.host_id == host_id)
    if status:
        query = query.filter(ImageResource.status == status)
    if name:
        query = query.filter(ImageResource.name.ilike('%%%s%%' % name))
    if file:
        query = query.filter(ImageResource.file.filename.ilike(file))
    page = query.order_by(ImageResource.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        _item = item.to_dict()
        if item.file:
            _item["filename"] = item.file.filename
        else:
            _item["filename"] = None
        _item["ip"] = item.host.ip
        _item["host_name"] = item.host.name
        data.append(_item)
    return api_success(data={"data": data})


@bp.delete('/images/<int:pk>')
def images_delete(pk):
    """
        删除镜像 目前仅仅删除数据库数据 判断是否有容器在运行 否则不允许删除
    """
    if db.session.query(CtfResource).filter(CtfResource.image_resource_id == pk).count():
        return api_fail(msg="无法删除当前镜像、因为相关容器正在运行中!", code=400)
    instance = db.session.query(ImageResource).get(pk)
    db.session.delete(instance)
    db.session.commit()
    return api_success()


@bp.post('/images')
def images_create():
    # Deprecated
    _data = request.get_json()
    name = _data.get("name")
    host_id = _data.get("host")
    version = _data.get("version")
    memory = _data.get("memory")
    cpu = _data.get("cpu")
    instance = ImageResource(
        host_id=host_id,
        name=name, version=version, memory=memory, cpu=cpu, file_id=_data["file_id"]
    )
    db.session.add(instance)
    db.session.commit()
    return api_success()


@bp.put('/images/<int:pk>')
def image_update(pk):
    # Deprecated
    _data = request.get_json()
    name = _data.get("name")
    host_id = _data.get("host_id")
    version = _data.get("version")
    memory = _data.get("memory")
    cpu = _data.get("cpu")
    instance = db.session.query(ImageResource).get(pk)
    instance.name = name
    instance.host_id = host_id
    instance.version = version
    instance.memory = memory
    instance.cpu = cpu
    instance.file_id = _data["file_id"]
    instance.status = ImageResource.STATUS_BUILDING
    db.session.commit()
    return api_success()


@bp.post('/upload_docker_tar')
def upload_docker_tar():
    # Deprecated
    pk = request.form.get("host")
    host_ = db.session.query(Host).get(pk)
    if not host_:
        return api_fail(msg="请选择宿主机", code=400)
    docker_api = host_.docker_api
    # 测试连通性
    try:
        docker.DockerClient(docker_api, timeout=1)
    except DockerException:
        return api_fail(msg="Docker主机不在线", code=400)
    file = request.files["file"]
    filename = file.name
    base_dir = current_app.config.get("BASE_DIR")
    save_file_path = os.path.join(base_dir, 'upload', filename)
    file.save(save_file_path)
    build_question_tar.apply_async((save_file_path, docker_api))
    return api_success()


@bp.post('/upload')
def ctf_upload_attachment():
    """
        题目附件上传
    """
    file = request.files["file"]
    filename = file.filename
    ext = filename.split('.')[-1]
    upload_dir = config.UPLOAD_DIR
    if ".." in filename:
        return api_fail(msg="文件名非法!")
    # 生成随机文件名
    uuid_filename = str(uuid.uuid4()) + "." + ext
    file_path = os.path.join(upload_dir, uuid_filename)
    file.save(file_path)
    # 添加数据库记录
    at = Attachment(filename=filename, file_path=uuid_filename)
    db.session.add(at)
    db.session.commit()
    return api_success({"filename": filename, "uuid": at.id})
