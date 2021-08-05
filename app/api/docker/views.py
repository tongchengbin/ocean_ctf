import os
from datetime import datetime

import docker
import requests
from docker import errors as docker_error
from flask import Blueprint, jsonify, request, g

from app import db
from app.lib.exceptions import make_error_response
from app.models.admin import TaskList
from app.models.docker import (Host, )
from app.tasks import task_docker

bp = Blueprint("admin_docker", __name__, url_prefix="/api/admin/docker")


@bp.route('/host', methods=['post'])
def host_crate():
    """
        添加docker主机
    :return:
    """
    data = request.get_json()
    name = data.get("name", "").strip()
    addr = data.get("addr", "").strip()
    ip = data.get("ip", "").strip()
    active = data.get("active")
    remark = data.get("remark")
    # 判断重复
    if not name:
        return make_error_response("主机名不允许为空！")
    if db.session.query(Host).filter(Host.name == name).all():
        return make_error_response("该主机名称已存在")
    if not addr:
        return make_error_response("主机地址不允许为空！")
    if not ip:
        return make_error_response("IP不允许为空！")
    if db.session.query(Host).filter(Host.addr == addr).first():
        return make_error_response("该主机地址已存在！")
    # 测试主机连通性
    uri = "http://{}/_ping".format(addr)
    try:
        requests.get(uri, timeout=2)
    except requests.exceptions.ConnectionError:
        return make_error_response("该主机不在线")
    db.session.add(Host(name=name, addr=addr, active=active, remark=remark, ip=ip, online_time=datetime.now()))
    db.session.commit()
    return jsonify({"status": "ok"})


@bp.route('/host/<int:host>', methods=['delete'])
def host_delete(host):
    """
    删除主机
    :param :host :主机ID
    :return
    """
    data = request.get_json()
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
    remark = data.get("remark")
    active = data.get("active")
    instance = db.session.query(Host).filter(Host.id == host).first()
    if not instance:
        return make_error_response("资源不存在！")
    if not name:
        return make_error_response("主机名不允许为空！")
    if active is not None:
        instance.active = active
    if db.session.query(Host).filter(Host.name == name, Host.id != host).all():
        return make_error_response("该主机名称已存在！")
    instance.name = name
    instance.remark = remark
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
    page = db.session.query(Host).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        if item.active:
            try:
                client = docker.DockerClient("http://{}".format(item.addr), timeout=2)
                info = client.info()
            except docker_error.DockerException:
                info = {}
        else:
            info = {}
        data.append({
            "id": item.id,
            "name": item.name,
            "addr": item.addr,
            "ip": item.ip,
            "remark": item.remark,
            "active": item.active,
            "info": info
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
        client = docker.DockerClient("http://{}".format(instance.addr))
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
        "addr": instance.addr,
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
        client = docker.DockerClient("http://{}".format(instance.addr))
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
        "addr": instance.addr,
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
        client = docker.DockerClient("http://{}".format(instance.addr))
        res = client.images.remove(tag)
    except docker_error.DockerException as e:
        error_str = str(e)
        if "is using its referenced image" in error_str:
            return make_error_response("当前镜像被占用，请先删除对应容器！")
        if "is being used by running container" in error_str:
            return make_error_response("当前有对应容器正在运行，请停止对应容器！")
        if "image is referenced in multiple repositories" in error_str:
            return make_error_response("镜像被多个仓库依赖！")
        return make_error_response("删除失败", 400)
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
        client = docker.DockerClient("http://{}".format(instance.addr))
        containers = client.containers.list(all=True)
    except docker_error.DockerException:
        containers = []
    containers = [container.attrs for container in containers]
    data = {
        "id": instance.id,
        "name": instance.name,
        "addr": instance.addr,
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
        client = docker.DockerClient("http://{}".format(instance.addr))
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
        client = docker.DockerClient("http://{}".format(instance.addr))
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
        client = docker.DockerClient("http://{}".format(instance.addr))
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
        client = docker.DockerClient("http://{}".format(instance.addr))
        image = client.images.get(image).attrs
    except docker_error.DockerException as e:
        image = {}
    data = {
        "id": instance.id,
        "name": instance.name,
        "url": instance.addr,
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
    task_docker.build_delay.apply_async(args=args, kwargs=kwargs)
    # task_docker.build_delay(*args,**kwargs)
    return jsonify({"status": 'ok', 'data': {"task": task.id}})
