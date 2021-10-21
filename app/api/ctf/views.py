import json
import logging
import os

import docker
from docker import errors as docker_error
from flask import Blueprint, make_response, jsonify, request
from flask import current_app

from app import db
from app.lib import exceptions
from app.lib.rest_response import success, fail
from app.models.ctf import QType, ImageResource, ContainerResource, Answer, QuestionFile
from app.models.ctf import Question
from app.models.docker import Host
from app.models.user import User
from app.tasks.ctf import build_question_tar
logger = logging.getLogger('app')
bp = Blueprint("admin_ctf", __name__, url_prefix="/api/admin/ctf")


@bp.route('/question/type', methods=['get'])
def question_type():
    """
        题库列表
    :return:
    """
    data = [i.value for i in QType]
    return jsonify({
        "results": data
    })


@bp.route('/containers', methods=['get'])
def container_list():
    """
    :return : 已生成题目容器
    """

    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    username = request.args.get("username")
    question_name = request.args.get("question")
    query = db.session.query(ContainerResource, ImageResource, Question, User).join(ImageResource,
                                                                                    ImageResource.id == ContainerResource.image_resource_id) \
        .join(Question, Question.image_id == ImageResource.id) \
        .join(User, ContainerResource.user_id == User.id)
    if username:
        query = query.filter(User.username.ilike("%{}%".format(username)))
    if question_name:
        query = query.filter(Question.name.ilike("%{}%".format(question_name)))
    page = query.order_by(ContainerResource.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        container_resource, image_resource, question, user_obj = item
        data.append({
            "image": "{}:{}".format(image_resource.name, image_resource.version),
            "container_resource": container_resource.id,
            "date_created": container_resource.date_created.strftime(
                "%Y-%m-%d %H:%M:%S") if container_resource.date_created else None,
            "date_modified": container_resource.date_modified.strftime(
                "%Y-%m-%d %H:%M:%S") if container_resource.date_modified else None,
            "container_name": container_resource.container_name,
            "container_id": container_resource.container_id,
            "container_status": container_resource.container_status,
            "container_port": container_resource.container_port,
            "addr": container_resource.addr,
            "flag": container_resource.flag,
            "destroy_time": container_resource.destroy_time.strftime(
                "%Y-%m-%d %H:%M") if container_resource.destroy_time else None,
            "username": user_obj.username,
            "question": {
                "name": question.name
            }
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/containers/<int:container_resource>/refresh', methods=['post'])
def ctf_containers_refresh(container_resource):
    """
        刷新容器状态 数据库和实际容器状态同步
        :param :container_resource :题目容器
        :return
    """

    item = db.session.query(ContainerResource, ImageResource, Question, User).join(ImageResource,
                                                                                   ImageResource.id == ContainerResource.image_resource_id) \
        .join(Question, Question.id == ImageResource.question_id) \
        .join(User, ContainerResource.user_id == User.id) \
        .filter(ContainerResource.id == container_resource).one_or_none()
    container_resource, image_resource, question, user_obj = item
    try:
        client = docker.DockerClient(container_resource.image_resource.host.docker_api)
        docker_container = client.containers.get(container_resource.container_id)
    except docker_error.DockerException:
        container_resource.container_status = "Outline".lower()
        db.session.commit()
        return make_response(jsonify({"msg": "容器不在线"}))
    container_resource.container_status = docker_container.attrs["State"]["Status"].lower()
    db.session.commit()
    return jsonify({})


@bp.route('/containers/<int:pk>/remove', methods=['post'])
def ctf_containers_remove(pk):
    """
        删除题目容器 如果容器不在线需要自己手动删除
        :param :container_resource 题目容器id
        :return
    """
    container = db.session.query(ContainerResource).get(pk)
    host = container.image.host
    try:
        client = docker.DockerClient(host.docker_api)
        docker_container = client.containers.get(container.container_id)
        docker_container.kill()
        docker_container.remove()
        db.session.delete(container)
        db.session.commit()
    except docker_error.DockerException as e:
        logger.exception(e)
        db.session.delete(container)
        db.session.commit()
        return make_response(jsonify({"msg": "容器不在线，请自行删除容器实例!"}), 200)
    return jsonify({"msg": "删除成功"})


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
    if _type is not None:
        query = query.filter(Question.type == _type)
    if status is not None:
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
            "score": 100,
            "flag": answer.flag,
            "username": user.username,
            "ip": answer.ip
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/answers/status_list', methods=['get'])
def answer_status_list():
    """
        回答题目的类别
    """
    return jsonify({"data": list(Answer.status_choices)})


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
    query = db.session.query(Question)
    if subject:
        query = query.filter(Question.type == subject)
    if search:
        query = query.filter(Question.name.contains(search))
    page = query.order_by(Question.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        if item.active and item.image:
            host_id = item.image.host_id
        else:
            host_id = None
        data.append({
            "attachment": json.loads(item.attachment) if item.attachment else None,
            "host_id": host_id,
            "image_id": item.image_id,
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
    return jsonify({
        "total": page.total,
        "results": data
    })


@bp.route('/question', methods=['post'])
def question_create():
    data = request.get_json()
    name = data["name"]
    active = data["active"]
    active_flag = data["active_flag"]
    desc = data["desc"]
    flag = data["flag"]
    q_type = data["type"]
    score = data["score"]
    image_id = data.get("image_id")
    attachment = data.get('attachment', [])
    if not name:
        raise exceptions.CheckException("名称字段不允许为空")
    question = Question(name=name,
                        active=active,
                        active_flag=active_flag,
                        desc=desc,
                        flag=flag,
                        type=q_type,
                        score=score,
                        image_id=image_id)
    db.session.add(question)
    db.session.flush()
    if attachment:
        for file in attachment:
            db.session.add(
                QuestionFile(question_id=question.id, filename=file["filename"], file_path=file["file_path"]))

    db.session.commit()
    return jsonify({})


@bp.route('/question/<int:pk>', methods=['put'])
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
    image_id = data.get("image_id")
    if active_flag is not None:
        instance.active_flag = active_flag
    if name is not None:
        instance.name = name
    if score is not None:
        instance.score = score
    if _type is not None:
        instance.type = _type
    if image_id is not None:
        instance.image_id = image_id
    if desc is not None:
        instance.desc = desc
    attachment = data.get('attachment', [])
    active = data.get("active")
    if active is not None:
        instance.active = active
    # if attachment is not None:
    #     # 删除之前的数据  重新关联  这里可以判断优化一下
    #     db.session.query(QuestionFile).filter(QuestionFile.question_id == instance.id).delete()
    #     for file in attachment:
    #         db.session.add(
    #             QuestionFile(question_id=pk, filename=file["filename"], file_path=file["file_path"]))
    instance.attachment = json.dumps(attachment)
    if active_flag is not None:
        if not active_flag:
            instance.flag = flag
    db.session.commit()
    return jsonify({})


@bp.route('/question/<int:pk>', methods=['DELETE'])
def question_delete(pk):
    """
                    删除题库  判断是否是动态题库 动态题库删除容器  实体容器 镜像
                    :param : question 题目ID
                """
    instance = db.session.query(Question).get(pk)
    if instance.active_flag:
        containers = db.session.query(ContainerResource).join(ImageResource,
                                                              ImageResource.id == ContainerResource.image_resource_id)
        # kill
        for container in containers:
            db.session.delete(container)
            client = docker.DockerClient(container.image.host.docker_api)
            docker_container = client.containers.get(container.container_id)
            docker_container.stop()
            container.status = 2
    # 删除镜像

    db.session.delete(instance)

    db.session.commit()
    return jsonify({})


@bp.route('/images', methods=['get'])
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
        query = query.filter(ImageResource.file.ilike('%' + file + '%|%'))
    page = query.order_by(ImageResource.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        _item = item.to_dict()
        _item["ip"] = item.host.ip
        _item["host_name"] = item.host.name
        data.append(_item)
    return success(data=data)


@bp.route('/images/<int:pk>', methods=['delete'])
def images_delete(pk):
    """
        删除镜像 目前仅仅删除数据库数据
    """
    instance = db.session.query(ImageResource).get(pk)
    db.session.delete(instance)
    db.session.commit()
    return success()


@bp.route('/images', methods=['post'])
def images_create():
    _data = request.get_json()
    name = _data.get("name")
    host_id = _data.get("host")
    version = _data.get("version")
    memory = _data.get("memory")
    cpu = _data.get("cpu")
    instance = ImageResource(
        host_id=host_id,
        name=name, version=version, memory=memory, cpu=cpu, file=_data["file"]
    )
    db.session.add(instance)
    db.session.commit()
    # build_question_tar(instance.id)
    build_question_tar.apply_async(args=(instance.id,))
    return success()


@bp.route('/images/<int:pk>', methods=['put'])
def image_update(pk):
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
    instance.file = _data["file"]
    instance.status = ImageResource.STATUS_BUILDING
    db.session.commit()
    # build_question_tar(instance.id)
    print(instance.id)
    build_question_tar.delay(1)
    # build_question_tar.apply_async(args=(instance.id,))
    return success()


@bp.route('/upload_docker_tar', methods=['post'])
def upload_docker_tar():
    pk = request.form.get("host")
    host_ = db.session.query(Host).get(pk)
    if not host_:
        return fail("请选择宿主机", status=400)
    docker_api = host_.docker_api
    # 测试连通性
    try:
        docker.DockerClient(docker_api, timeout=1)
    except docker.errors.DockerException:
        return fail(msg="Docker主机不在线", status=400)
    file = request.files["file"]
    filename = file.name
    base_dir = current_app.config.get("BASE_DIR")
    save_file_path = os.path.join(base_dir, 'upload', filename)
    file.save(save_file_path)
    build_question_tar.apply_async((save_file_path, docker_api))
    return success()
