import json
import os
from datetime import datetime
import yaml
import docker
import requests
from docker import errors as docker_error
from flask import Blueprint, jsonify, request, g
from flask_pydantic import validate
from sqlalchemy import or_
from sqlalchemy.exc import IntegrityError

from app import db
from app.api.docker.service import fetch_system_info_by_docker_api
from app.lib.exceptions import make_error_response
from app.lib.rest_response import fail, success
from app.models.admin import TaskList, Config
from app.models.docker import (Host, ComposeDB, ComposeRunner, DockerResource, )
from .form import PageForm, ComposeDBForm, DockerResourceForm
import logging
from app.api.docker import task
from ...lib.tools import model2dict
from app.extensions import cache

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


@bp.get('/info')
def docker_info():
    api = Config.get_config(Config.KEY_DOCKER_API)
    ip = Config.get_config(Config.KEY_IP)
    try:
        client = docker.DockerClient(api)
        info = client.info()
    except docker_error.DockerException:
        info = {}
    from pprint import pprint
    pprint(info)
    if info:
        """数据格式化"""
        info = {
            "name": info["Name"],
            "containers": info["Containers"],
            "images": info["Images"],
            "version": info["KernelVersion"],
            "memory": round(info["MemTotal"] / 1024 / 2024 / 1024, 2),
            "cpu": info["NCPU"],
            "system": info["OperatingSystem"],
            "system_time": info["SystemTime"]

        }
    data = {
        "docker_api": api,
        "ip": ip,
        "info": info
    }
    return jsonify({"data": data})


@bp.get('/images')
def docker_images():
    """
        获取镜像列表
    :return:
    """
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    try:
        client = docker.DockerClient(docker_api)
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
    return jsonify({"data": images_list})


@bp.delete('/images')
def image_delete():
    tag = request.get_json().get('id')
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    try:
        client = docker.DockerClient(docker_api)
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
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    try:
        client = docker.DockerClient(docker_api)
        containers = client.containers.list(all=True)
    except docker_error.DockerException:
        containers = []
    containers = [container.attrs for container in containers]
    return jsonify({"data": containers})


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
    container_id = request.get_json().get("id")
    action = request.get_json().get("action")
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    try:
        client = docker.DockerClient(docker_api)
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


@bp.route('/image', methods=['post'])
def image_create():
    """
        编译是一个比较耗时的任务 这里回采取延迟执行方式
    """
    build_type = request.args.get('build_type')
    task_obj = TaskList(admin_id=g.user.id, target_id=None, title="build image for %s" % build_type)
    db.session.add(task_obj)
    db.session.commit()
    tag = request.args.get('tag')
    if len(tag.split(":")) != 2:
        return make_error_response("images name 格式错误请指定tag")
    args = (task_obj.id, build_type, tag, g.user.id)
    if build_type == 'tar':
        file = request.files.get('files')
        pt = os.path.join('upload', file.filename)
        file.save(pt)
        kwargs = {"pt": pt}
    elif build_type == 'dockerfile':
        kwargs = {"dockerfile": request.get_json().get("dockerfile")}
    else:
        kwargs = {}
    task.build_delay.apply_async(args=args, kwargs=kwargs)
    return jsonify({"status": 'ok', 'data': {"task": task_obj.id}})


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
    if db.session.query(ComposeDB).filter(or_(ComposeDB.name == body.name, ComposeDB.path == body.path)).count():
        return fail(msg="compose已存在", status=400)
    ComposeDB.create(name=body.name, path=body.path)
    return jsonify({})


@bp.delete("/compose_db/<int:pk>")
def compose_db_delete(pk):
    ComposeDB.get_by_id(pk).delete()
    return jsonify({})


@bp.post("/compose_db/<int:pk>/build")
def compose_db_build(pk):
    # todo
    instance = ComposeDB.get_by_id(pk)
    # scheduler.add_job(f"build_compose", task.compose_build, args=(instance.id,))
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


@bp.get("/resource")
@validate()
def docker_resource_list(query: PageForm):
    db_query = db.session.query(DockerResource).filter()
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        info = model2dict(item)
        info["docker_type_name"] = item.docker_type_name
        info["status_name"] = item.status_name
        data.append(info)
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.post("/resource")
@validate()
def docker_resource_create(body: DockerResourceForm):
    DockerResource.create(**body.dict())
    return success()


@bp.post("/resource/<int:pk>/build")
def docker_resource_build(pk):
    """
        资源编译
    """
    task.delay_docker_resource_build(pk)
    # task.delay_docker_resource_build.apply_async(args=(pk,))
    return success()


@bp.get("/resource/<int:pk>/logs")
def docker_resource_logs(pk):
    resource = DockerResource.get_by_id(pk)
    start = int(request.args.get('start', 0))
    key = "DOCKER_RESOURCE_%s" % pk
    data = []
    for log in cache.lrange(key, start, -1):
        data.append(json.loads(log))

    results = {
        "status": resource.status,
        "data": data
    }
    return success(results)


@bp.post("/resource/sync")
def docker_resource_sync():
    url = request.get_json().get("url")
    try:
        res = requests.get(url, verify=False, timeout=10)
    except requests.exceptions.RequestException as e:
        logger.error(e)
        return fail(msg="同步失败、同步服务器连接失败", status=400)
    data = yaml.load(res.text, Loader=yaml.SafeLoader)
    resources = data.get("resources", [])
    res_dict = {}
    add_count = 0
    if resources:
        # 获取当前数据
        query = db.session.query(DockerResource).all()
        for i in query:
            res_dict[i.name] = (i.image, i.resource_type)
    for item in resources:
        logger.info(item)
        old_res = res_dict.get(item["name"])
        if old_res and old_res == item["resource_type"]:
            continue
        if item["resource_type"] not in ("CTF", "VUL"):
            continue
        DockerResource.create(name=item["name"], image=item["image"], resource_type=item["resource_type"],
                              description=item["desc"])
        add_count += 1
    results = {
        "total": add_count,
    }
    return success(results)


@bp.delete("/resource/<int:pk>")
def resource_delete(pk):
    try:
        DockerResource.get_by_id(pk).delete()
    except IntegrityError:
        db.session.rollback()
        return fail(msg="资源占用中、当前状态无法删除,请检查引用对象!", status=400)
    return jsonify({})
