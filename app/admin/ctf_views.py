import docker
from docker import errors as docker_error
from flask import Blueprint, make_response, jsonify, g, request

from app.auth.acls import admin_required
from data.database import DEFAULT_DATABASE as db
from data.models import (Question, User
                         )
from data.models.ctf import QType, ImageResource, ContainerResource, Answer, QuestionFile

bp = Blueprint("admin_ctf", __name__, url_prefix="/admin/ctf")


@bp.errorhandler(500)
def api_500(ex=None):
    """Return a 500 in JSON format."""
    return make_response(
        jsonify({
            'error': 'Internal server error',
            'code': 500
        }), 500)


@bp.errorhandler(400)
def api_400(ex=None):
    """Return a 500 in JSON format."""
    return make_response(
        jsonify({
            'error': 'Internal server error',
            'code': 400
        }), 400)


@bp.route('/question', methods=['get'])
@admin_required
def question_list():
    """
        题库列表 和题库添加
        :data :subject 题目分类
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    subject = request.args.get("subject")
    query = db.session.query(Question)
    if subject:
        query = query.filter(Question.type == subject)
    page = query.order_by(Question.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        question_file = db.session.query(QuestionFile).filter(QuestionFile.question_id == item.id).all()
        image_resource = db.session.query(ImageResource).filter(ImageResource.question_id == item.id).one_or_none()
        if image_resource:
            resource = {
                "host": image_resource.host_id,
                "image": image_resource.image_id
            }
        else:
            resource = {}
        data.append({
            "question_file": [{"filename": f.filename, "file_path": f.file_path} for f in question_file],
            "resource": resource,
            "id": item.id,
            "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
            "date_modified": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
            "name": item.name,
            'type': item.type,
            "active": item.active,
            "flag": item.flag,
            "active_flag": item.active_flag,
            "integral": item.integral,
            "desc": item.desc
        })
    return jsonify({
        "total": page.total,
        "results": data
    })


@bp.route('/question/create', methods=['post'])
@admin_required
def question_create():
    data = request.get_json()
    name = data["name"]
    active = data["active"]
    active_flag = data["active_flag"]
    desc = data["desc"]
    flag = data["flag"]
    q_type = data["type"]
    integral = data["integral"]
    attachment = data.get('attachment', [])
    question = Question(name=name,
                        active=active,
                        active_flag=active_flag,
                        desc=desc,
                        flag=flag,
                        type=q_type,
                        integral=integral)
    db.session.add(question)
    db.session.flush()
    if attachment:
        for file in attachment:
            db.session.add(QuestionFile(question_id=question.id, filename=file["filename"], file_path=file["file_path"]))

    db.session.commit()
    if active_flag:
        image = data["image"]
        host = data["host"]
        # docker image 已经在主机中了 只需要创建虚拟镜像资源绑定即可
        image_resource = ImageResource(question_id=question.id, host_id=host, image_id=image)
        db.session.add(image_resource)
        db.session.commit()
    return jsonify({})


@bp.route('/question/<int:question>', methods=['post'])
def question_update(question):
    """
        修改题目
    :param question: 题目ID
    :return:
    """
    data = request.get_json()
    instance = db.session.query(Question).get(question)
    name = data.get("name")
    _type = data.get("type")
    active_flag = data.get("active_flag")
    integral = data.get("integral")
    flag = data.get("flag")
    instance.active_flag = active_flag
    instance.name = name
    instance.integral = integral
    instance.type = _type
    attachment = data.get('attachment', [])

    if attachment:
        # 删除之前的数据  重新关联  这里可以判断优化一下
        db.session.query(QuestionFile).filter(QuestionFile.question_id == instance.id).delete()
        for file in attachment:
            db.session.add(QuestionFile(question_id=question, filename=file["filename"], file_path=file["file_path"]))
    if active_flag:
        host = data.get("host")
        image = data.get("image")
        current_images = db.session.query(ImageResource).filter(ImageResource.question_id == instance.id).one_or_none()
        if current_images:
            current_images.host_id = host
            current_images.image_id = image
        else:
            db.session.add(ImageResource(host_id=host, image_id=image, question_id=instance.id))
    else:
        if flag is not None:
            instance.flag = flag
    db.session.commit()
    return jsonify({})


@bp.route('/question/<int:question>/delete', methods=['post'])
def question_delete(question):
    """
        删除题库  判断是否是动态题库 动态题库删除容器  实体容器 镜像
        :param : question 题目ID
    """
    instance = db.session.query(Question).get(question)
    if instance.active_flag:
        containers = db.query(ContainerResource).join(ImageResource,
                                                      ImageResource.id == ContainerResource.image_resource_id). \
            filter(ImageResource.question_id == instance.id)
        # kill
        for container in containers:
            db.session.delete(container)
            client = docker.DockerClient("http://{}".format(container.image.host.addr))
            docker_container = client.containers.get(container.container_id)
            docker_container.stop()
            container.status = 2
    # 删除镜像

    db.session.delete(instance)

    db.session.commit()
    return jsonify({})


@bp.route('/question/type', methods=['get'])
@admin_required
def question_type():
    """
        题库列表
    :return:
    """
    data = [i.value for i in QType]
    return jsonify({
        "results": data
    })


@bp.route('/user', methods=['get'])
@admin_required
def user():
    """
        获取当前用户信息
    :return:
    """
    current_user = g.user
    return jsonify({
        "id": current_user.id,
        "username": current_user.username,
        "role_name": current_user.role.name
    })


@bp.route('/containers', methods=['get'])
@admin_required
def ctf_containers():
    """
    :return : 已生成题目容器
    """

    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    page = db.session.query(ContainerResource, ImageResource, Question, User).join(ImageResource,
                                                                                   ImageResource.id == ContainerResource.image_resource_id) \
        .join(Question, Question.id == ImageResource.question_id) \
        .join(User, ContainerResource.user_id == User.id).order_by(ContainerResource.id.desc()).paginate(page=page,
                                                                                                         per_page=page_size)
    data = []
    for item in page.items:
        container_resource, image_resource, question, user_obj = item
        data.append({
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
@admin_required
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
        client = docker.DockerClient("http://{}".format(container_resource.image_resource.host.addr))
        docker_container = client.containers.get(container_resource.container_id)
    except docker_error.DockerException:
        container_resource.container_status = "Outline".lower()
        db.session.commit()
        return make_response(jsonify({"msg": "容器不在线"}))
    container_resource.container_status = docker_container.attrs["State"]["Status"].lower()
    db.session.commit()
    return jsonify({})


@bp.route('/containers/<int:container_resource>/remove', methods=['post'])
@admin_required
def ctf_containers_remove(container_resource):
    """
        删除题目容器 如果容器不在线需要自己手动删除
        :param :container_resource 题目容器id
        :return
    """
    item = db.session.query(ContainerResource, ImageResource, Question, User).join(ImageResource,
                                                                                   ImageResource.id == ContainerResource.image_resource_id) \
        .join(Question, Question.id == ImageResource.question_id) \
        .join(User, ContainerResource.user_id == User.id) \
        .filter(ContainerResource.id == container_resource).one_or_none()
    container_resource, image_resource, question, user_obj = item
    try:
        client = docker.DockerClient("http://{}".format(container_resource.image_resource.host.addr), timeout=3)
        docker_container = client.containers.get(container_resource.container_id)
        docker_container.kill()
        docker_container.remove()
        db.session.delete(container_resource)
        db.session.commit()
    except docker_error.DockerException:
        db.session.delete(container_resource)
        db.session.commit()
        return make_response(jsonify({"msg": "容器不在线，请自行删除容器实例!"}), 200)
    return jsonify({"msg": "删除成功"})


@bp.route('/answers', methods=['get'])
@admin_required
def answers():
    """
        答题记录
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    _type = request.args.get("q_type")
    status = request.args.get("status")
    query = db.session.query(Answer, Question, User) \
        .join(Question, Question.id == Answer.question_id) \
        .join(User, User.id == Answer.user_id)
    if _type:
        query = query.filter(Question.type == _type)
    if status:
        query = query.filter(Answer.status == status)
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
@admin_required
def answer_status_list():
    """
        回答题目的类别
    """
    return jsonify({"data": list(Answer.status_choices)})
