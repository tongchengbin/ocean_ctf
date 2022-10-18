import os
from datetime import datetime

import docker
from docker import errors as docker_error
from flask import Blueprint, jsonify, request, g
from flask_pydantic import validate
from sqlalchemy import or_

from app import db, scheduler
from app.api.docker.service import fetch_system_info_by_docker_api
from app.lib.exceptions import make_error_response
from app.lib.rest_response import fail, success
from app.models.admin import TaskList
from app.models.docker import (Host, ComposeDB, ComposeRunner, )
from app.api.docker import task
from .form import PageForm, ComposeDBForm
import logging

from app.api.docker import task
from ...lib.tools import model2dict

logger = logging.getLogger('app')
bp = Blueprint("admin_docker", __name__, url_prefix="/api/admin/docker")


@bp.route('/host', methods=['post'])
def host_crate():
    """
        添加docker主机
    :return:
    """
    data = request.get_json()
    name = data.get("name", "").strip()
    docker_api = data.get("docker_api", "").strip()
    ip = data.get("ip", "").strip()
    active = data.get("active")
    remark = data.get("remark")
    # 判断重复
    if not name:
        return make_error_response("主机名不允许为空！")
    if db.session.query(Host).filter(Host.name == name).all():
        return make_error_response("该主机名称已存在")
    if not docker_api:
        return make_error_response("主机地址不允许为空！")
    if not ip:
        return make_error_response("IP不允许为空！")
    # 判断出口ip 是否存在
    if db.session.query(Host).filter(Host.docker_api == docker_api).first():
        return fail("docker api 地址已存在!")
    if db.session.query(Host).filter(Host.ip == ip).first():
        return fail(msg="出口IP已存在!", status=400)
    # 测试主机连通性
    host_info = fetch_system_info_by_docker_api(docker_api)
    if not host_info:
        return fail(msg="docker api 无法连接、请检查地址！", status=400)
    db.session.add(Host(name=name, docker_api=docker_api, active=active, remark=remark, ip=ip, system=host_info))
    db.session.commit()
    return jsonify({"status": "ok"})


@bp.route('/host/<int:host>', methods=['delete'])
def host_delete(host):
    """
    删除主机
    :param :host :主机ID
    :return
    """
    instance = db.session.query(Host).get(host)
    db.session.delete(instance)
    db.session.commit()
    return jsonify({})


@bp.route('/host/<int:host>', methods=['put'])
def host_update(host):
    """
        添加docker主机
    :return:
    """
    data = request.get_json()
    name = data.get("name", "").strip()
    ip = data.get("ip")
    remark = data.get("remark")
    active = data.get("active")
    docker_api = data.get("docker_api")
    instance = db.session.query(Host).filter(Host.id == host).first()
    if not instance:
        return make_error_response("资源不存在！")
    if not name:
        return make_error_response("主机名不允许为空！")
    if active is not None:
        instance.active = active
    if db.session.query(Host).filter(Host.name == name, Host.id != host).all():
        return make_error_response("该主机名称已存在！")
    system_info = fetch_system_info_by_docker_api(docker_api)
    instance.docker_api = docker_api
    instance.name = name
    instance.ip = ip
    instance.remark = remark
    instance.system = system_info
    if system_info:
        instance.online_time = datetime.now()
    db.session.commit()
    return jsonify({"status": "ok"})


@bp.route('/host', methods=['get'])
def host_list():
    """
        主机列表
    :param
    :return
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get("search")
    query = db.session.query(Host)
    if search:
        query = query.filter(Host.name.contains("%" + search + "%") | Host.ip.contains("%" + search + "%"))
    page = query.paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "name": item.name,
            "docker_api": item.docker_api,
            "ip": item.ip,
            "remark": item.remark,
            "active": item.active,
            "system": item.system,
            "create_time": item.create_time_format,
            "online_time": item.online_time.strftime("%Y-%m-%d %H:%M") if item.online_time else None,
            "is_online": bool(item.online_time and (datetime.now() - item.online_time).total_seconds() < 60 * 10)
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/host/<int:pk>', methods=['get'])
def host_detail(pk):
    """主机详情
    :data id: 主机ID
    :return
    """
    instance = db.session.query(Host).filter(Host.id == pk).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        info = client.info()
    except docker_error.DockerException:
        info = {}
    if info:
        """数据格式化"""
        info = {
            "containers": info["Containers"],
            "images": info["Images"],
            "version": info["KernelVersion"],
            "memory": round(info["MemTotal"] / 1024 / 2024 / 1024, 2),
            "cpu": info["NCPU"],
            "system": info["OperatingSystem"],
            "system_time": info["SystemTime"]

        }
    data = {
        "id": instance.id,
        "name": instance.name,
        "docker_api": instance.docker_api,
        "remark": instance.remark,
        "ip": instance.ip,
        "info": info
    }
    return jsonify({"data": data})


@bp.route('/host/<int:host>/images', methods=['get'])
def host_images(host):
    """
        获取镜像列表
    :param host: 主机ID
    :return:
    """
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        images = client.images.list()
    except docker_error.DockerException:
        images = []
    images_list = []
    for im in images:
        attrs = im.attrs
        if not attrs["RepoTags"]:
            continue
        tmp = {
            "created": attrs["Created"].split("T")[0],
            "id": attrs["Id"][7:17],
            "size": attrs["Size"],
            "repo": attrs["RepoTags"][0].split(":")[0],
            "tags": [i.split(":")[1] for i in attrs["RepoTags"]]
        }
        images_list.append(tmp)
    data = {
        "id": instance.id,
        "name": instance.name,
        "docker_api": instance.docker_api,
        "remark": instance.remark,
        "images": images_list
    }
    return jsonify({"data": data})


@bp.route('/images', methods=['delete'])
def image_delete():
    tag = request.get_json().get('id')
    host = request.get_json().get("host")
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        res = client.images.remove(tag)
        print(res)
    except docker_error.DockerException as e:
        error_str = str(e)
        logger.info("ERROR %s" % error_str)
        if "is using its referenced image" in error_str:
            return make_error_response("当前镜像被占用，请先删除对应容器！")
        if "is being used by running container" in error_str:
            return make_error_response("当前有对应容器正在运行，请停止对应容器！")
        if "image is referenced in multiple repositories" in error_str:
            return make_error_response("镜像被多个仓库依赖！")
        return make_error_response(f"删除失败({error_str})", 400)
    return jsonify({"status": 0})


@bp.route('/containers', methods=['get'])
def host_docker_container():
    """
        获取镜像列表
    :return:
    """
    pk = request.args.get("id")
    instance = db.session.query(Host).filter(Host.id == pk).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        containers = client.containers.list(all=True)
    except docker_error.DockerException:
        containers = []
    containers = [container.attrs for container in containers]
    data = {
        "id": instance.id,
        "name": instance.name,
        "docker_api": instance.docker_api,
        "remark": instance.remark,
        "containers": containers
    }
    return jsonify({"data": data})


@bp.route('/containerStop', methods=['post'])
def container_stop():
    """
        关闭容器
    :return:
    """
    host = request.get_json().get("host")
    container_id = request.get_json().get("id")
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        container = client.containers.get(container_id)
        container.stop()
    except docker_error.DockerException:
        return make_error_response(f'关闭容器失败:{container_id}')
    return jsonify({"status": 'ok'})


@bp.route('/containerStart', methods=['post'])
def container_start():
    """
        关闭容器
    :return:
    """
    host = request.get_json().get("host")
    container_id = request.get_json().get("id")
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        container = client.containers.get(container_id)
        res = container.start()
    except docker_error.DockerException:
        return make_error_response('关闭容器失败:{container_id}')
    return jsonify({"status": 'ok'})


@bp.route('/containerAction', methods=['post'])
def container_action():
    """
        容器操作
    :return:
    """
    host = request.get_json().get("host")
    container_id = request.get_json().get("id")
    action = request.get_json().get("action")
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        container = client.containers.get(container_id)
        action_fun = getattr(container, action)
        action_fun()
    except docker_error.DockerException as e:
        return make_error_response('关闭容器失败:{container_id}')
    return jsonify({"status": 'ok'})


@bp.route('/host/<int:host>/image/<image>', methods=['get'])
def image_detail(host, image):
    """
        镜像详情
    :param host: 主机
    :param image: 镜像ID
    :return:
    """

    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        image = client.images.get(image).attrs
    except docker_error.DockerException as e:
        image = {}
    data = {
        "id": instance.id,
        "name": instance.name,
        "docker_api": instance.docker_api,
        "remark": instance.remark,
        "image": image
    }
    return jsonify({"results": data})


@bp.route('/host/<int:host>/image', methods=['post'])
def image_create(host):
    """
        编译是一个比较耗时的任务 这里回采取延迟执行方式
    """
    build_type = request.args.get('build_type')
    task = TaskList(admin_id=g.user.id, target_id=host, title="build image for %s" % build_type)
    db.session.add(task)
    db.session.commit()
    tag = request.args.get('tag')
    if len(tag.split(":")) != 2:
        return make_error_response("images name 格式错误请指定tag")
    args = (task.id, host, build_type, tag, g.user.id)
    if build_type == 'tar':
        file = request.files.get('files')
        pt = os.path.join('upload', file.filename)
        file.save(pt)
        kwargs = {"pt": pt}
    elif build_type == 'dockerfile':
        kwargs = {"dockerfile": request.get_json().get("dockerfile")}
    else:
        kwargs = {}
    scheduler.add_job(f"build_delay", task_docker.build_delay, args=args, kwargs=kwargs)
    return jsonify({"status": 'ok', 'data': {"task": task.id}})


@bp.get('/host/<int:host>/image_list')
def image_list(host):
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        images_list = client.images.list()
    except docker_error.DockerException as e:
        return fail(msg="容器主机无法连接", status=400)
    repos = []
    for i in images_list:
        attrs = i.attrs
        if not attrs["RepoTags"]:
            continue
        for r in i.tags:
            repos.append(r)
    return success(repos)


@bp.get("/compose_db")
@validate()
def compose_db_list(query: PageForm):
    db_query = db.session.query(ComposeDB).filter()
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        data.append(model2dict(item))
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.post("/compose_db")
@validate()
def compose_db_create(body: ComposeDBForm):
    if db.session.query(ComposeDB).filter(or_(ComposeDB.name==body.name , ComposeDB.path==body.path)).count():
        return fail(msg="compose已存在", status=400)
    ComposeDB.create(name=body.name, path=body.path)
    return jsonify({})


@bp.delete("/compose_db/<int:pk>")
def compose_db_delete(pk):
    ComposeDB.get_by_id(pk).delete()
    return jsonify({})


@bp.post("/compose_db/<int:pk>/build")
def compose_db_build(pk):
    instance = ComposeDB.get_by_id(pk)
    scheduler.add_job(f"build_compose", task.compose_build, args=(instance.id,))
    return jsonify({})


@bp.get("/compose_runner")
@validate()
def compose_runner_list(query: PageForm):
    db_query = db.session.query(ComposeRunner).filter()
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        data.append(model2dict(item))
    return jsonify({
        "total": page.total,
        "data": data
    })