import os
from datetime import datetime

import docker
import requests
from docker import errors as docker_error
from flask import Blueprint, make_response, jsonify, request, g

from app.auth.acls import admin_required
from app.tasks import task_docker
from data.database import DEFAULT_DATABASE as db
from data.models import TaskList
from data.models.docker import (Host, )

bp = Blueprint("admin_docker", __name__, url_prefix="/admin/docker")


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


@bp.errorhandler(404)
def api_404(ex=None):
    """Return a 500 in JSON format."""
    return make_response(
        jsonify({
            'error': 'url not found',
            'code': 404
        }), 404)


@bp.route('/addHost', methods=['post'])
@admin_required
def add_host():
    """
        添加docker主机
    :return:
    """
    data = request.get_json()
    name = data.get("name", "").strip()
    addr = data.get("addr", "").strip()
    ip = data.get("ip", "").strip()
    remark = data.get("remark")
    # 判断重复
    if not name:
        return make_response(jsonify({'error': '主机名不允许为空！', 'code': 400}), 400)
    if db.session.query(Host).filter(Host.name == name).all():
        return make_response(jsonify({'error': '该主机名称已存在！', 'code': 400}), 400)
    if not addr:
        return make_response(jsonify({'error': '主机地址不允许为空！', 'code': 400}), 400)
    if not ip:
        return make_response(jsonify({'error': 'IP不允许为空！', 'code': 400}), 400)
    if db.session.query(Host).filter(Host.addr == addr).first():
        return make_response(jsonify({'error': '该主机地址已存在！', 'code': 400}), 400)
    # 测试主机连通性
    uri = "http://{}/_ping".format(addr)
    try:
        requests.get(uri, timeout=2)
    except requests.exceptions.ConnectionError:
        return make_response(jsonify({'error': '该主机不在线！', 'code': 400}), 400)
    db.session.add(Host(name=name, addr=addr, remark=remark, ip=ip, online_time=datetime.now()))
    db.session.commit()
    return jsonify({"status": "ok"})


@bp.route('/host/<int:host>', methods=['post'])
@admin_required
def host_update(host):
    """
    :param :host :主机ID
    :return
    """
    data = request.get_json()
    active = data.get('active')
    instance = db.session.query(Host).get(host)
    if active is not None:
        instance.active = active
    db.session.commit()
    return jsonify({})


@bp.route('/host/<int:host>/delete', methods=['post'])
@admin_required
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


@bp.route('/editHost', methods=['post'])
@admin_required
def edit_host():
    """
        添加docker主机
    :return:
    """
    data = request.get_json()
    pk = data.get("id")
    name = data.get("name", "").strip()
    remark = data.get("remark")
    # 判断重复
    if not pk:
        return make_response(jsonify({'error': '修改失败！', 'code': 400}), 400)
    instance = db.session.query(Host).filter(Host.id == pk).first()
    if not instance:
        return make_response(jsonify({'error': '资源不存在！', 'code': 400}), 400)
    if not name:
        return make_response(jsonify({'error': '主机名不允许为空！', 'code': 400}), 400)
    if db.session.query(Host).filter(Host.name == name, Host.id != pk).all():
        return make_response(jsonify({'error': '该主机名称已存在！', 'code': 400}), 400)
    instance.name = name
    instance.remark = remark
    db.session.commit()
    return jsonify({"status": "ok"})


@bp.route('/hostList', methods=['get'])
@admin_required
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
                client = docker.DockerClient("http://{}".format(item.addr), timeout=1.5)
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


@bp.route('/hostDetail', methods=['get'])
@admin_required
def host_detail():
    """主机详情
    :data id: 主机ID
    :return
    """
    pk = request.args.get("id")
    instance = db.session.query(Host).filter(Host.id == pk).one_or_none()
    try:
        client = docker.DockerClient("http://{}".format(instance.addr))
        info = client.info()
    except docker_error.DockerException:
        info = {}
    data = {
        "id": instance.id,
        "name": instance.name,
        "addr": instance.addr,
        "remark": instance.remark,
        "info": info
    }
    return jsonify({"data": data})


@bp.route('/host/<int:host>/images', methods=['get'])
@admin_required
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
    images = [image.attrs for image in images]
    data = {
        "id": instance.id,
        "name": instance.name,
        "addr": instance.addr,
        "remark": instance.remark,
        "images": images
    }
    return jsonify({"data": data})


@bp.route('/host/<int:host>/images/del_tag', methods=['post'])
@admin_required
def del_tag(host):
    """
        删除镜像标签
        :param host:docker主机id
        :data tag:标签
    :return:
    """
    tag = request.get_json().get('tag')
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient("http://{}".format(instance.addr))
        res = client.images.remove(tag)
        print(res)
    except docker_error.DockerException:
        pass
    return jsonify({"status": 0})


@bp.route('/imagesDel', methods=['post'])
@admin_required
def images_del():
    """
        删除镜像

    :return:
    """
    pk = request.get_json().get("host")
    image_id = request.get_json().get("id")
    instance = db.session.query(Host).filter(Host.id == pk).one_or_none()
    try:
        client = docker.DockerClient("http://{}".format(instance.addr))
        client.images.remove(image_id)
    except (docker_error.DockerException, docker_error.APIError) as e:
        return make_response(jsonify({"error": f"删除失败:{e}"}), 400)
    return jsonify({"status": "OK"})


@bp.route('/containers', methods=['get'])
@admin_required
def host_container():
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
@admin_required
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
        return make_response(jsonify({"error": f'关闭容器失败:{container_id}'}))
    return jsonify({"status": 'ok'})


@bp.route('/containerStart', methods=['post'])
@admin_required
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
        return make_response(jsonify({"error": f'关闭容器失败:{container_id}'}))
    return jsonify({"status": 'ok'})


@bp.route('/containerAction', methods=['post'])
@admin_required
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
        return make_response(jsonify({"error": f'操作失败:%s' % e}), 400)
    return jsonify({"status": 'ok'})


@bp.route('/host/<int:host>/image/<image>', methods=['get'])
@admin_required
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


@bp.route('/host/<int:host>/image/build', methods=['post'])
@admin_required
def build(host):
    """
        编译是一个比较耗时的任务 这里回采取延迟执行方式
    """
    build_type = request.args.get('build_type')
    task = TaskList(admin_id=g.user.id, target_id=host, title="build image for %s" % build_type)
    db.session.add(task)
    db.session.commit()
    tag = request.args.get('tag')
    args = (task.id, host, build_type, tag, g.user.id)
    if build_type == 'tar':
        file = request.files.get('files')
        pt = os.path.join('temp', file.filename)
        file.save(pt)
        kwargs = {"pt": pt}
    elif build_type == 'dockerfile':
        kwargs = {"dockerfile": request.get_json().get("dockerfile")}
    else:
        kwargs = {}
    task_docker.build_delay.apply_async(args=args, kwargs=kwargs)
    # task_docker.build_delay(*args,**kwargs)
    return jsonify({"status": 'ok', 'data': {"task": task.id}})
