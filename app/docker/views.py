import json
import logging
import os

import docker
import requests
import yaml
from docker import errors as docker_error, APIClient
from docker.errors import DockerException
from flask import Blueprint, request, g
from flask_pydantic import validate
from sqlalchemy import or_
from sqlalchemy.exc import IntegrityError

from app.docker import task
from app.extensions import cache
from app.extensions import db
from app.lib.api import api_success, api_fail
from app.lib.tools import model2dict
from app.models.admin import TaskList, Config
from app.models.docker import (Host, ComposeDB, ComposeRunner, DockerResource, )
from .form import PageForm, ComposeDBForm, DockerResourceForm
from ..lib.validator import check_image_name
from ..models.ctf import Question

logger = logging.getLogger('app')
bp = Blueprint("admin_docker", __name__, url_prefix="/api/admin/docker")


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
    return api_success({"data": data})


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
    return api_success({"data": images_list})


@bp.post('/delete_images')
def image_delete():
    tag = request.get_json().get('id')
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    try:
        client = docker.DockerClient(docker_api)
        res = client.images.remove(tag)
    except docker_error.DockerException as e:
        error_str = str(e)
        logger.info("ERROR %s" % error_str)
        if "is using its referenced image" in error_str:
            return api_fail(msg="当前镜像被占用，请先删除对应容器！")
        if "is being used by running container" in error_str:
            return api_fail(msg="当前有对应容器正在运行，请停止对应容器！")
        if "image is referenced in multiple repositories" in error_str:
            return api_fail(msg="镜像被多个仓库依赖！")
        return api_fail(msg=f"删除失败({error_str})")
    return api_success({"status": 0})


@bp.get('/containers')
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
    return api_success({"data": containers})


@bp.post('/containerStop')
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
        return api_fail(msg=f'关闭容器失败:{container_id}')
    return api_success({"status": 'ok'})


@bp.post('/containerStart')
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
        return api_fail(msg='关闭容器失败:{container_id}')
    return api_success({"status": 'ok'})


@bp.post('/containerAction')
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
        return api_fail(msg='关闭容器失败:{container_id}')
    return api_success({"status": 'ok'})


@bp.get('/host/<int:host>/image/<image>')
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
    return api_success({"results": data})


@bp.route('/image', methods=['post'])
def image_create():
    """
        编译是一个比较耗时的任务 这里回采取延迟执行方式
    """
    build_type = request.args.get('build_type')

    tag = request.args.get('tag')
    if len(tag.split(":")) != 2:
        return api_fail(msg="images name 格式错误请指定tag")
    name, version = tag.split(":")
    # check name and version 是否包含特殊字符
    if not name or not version:
        return api_fail(msg="images name 格式错误请指定tag")
    if not check_image_name(tag):
        return api_fail(msg="镜像名称不合法")
    task_obj = TaskList(admin_id=g.user.id, target_id=None, title="build image for %s" % build_type)
    db.session.add(task_obj)
    db.session.commit()
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
    return api_success({"status": 'ok', 'data': {"task": task_obj.id}})


@bp.get('/host/<int:host>/image_list')
def image_list(host):
    instance = db.session.query(Host).filter(Host.id == host).one_or_none()
    try:
        client = docker.DockerClient(instance.docker_api)
        images_list = client.images.list()
    except docker_error.DockerException as e:
        return api_fail(msg="容器主机无法连接", code=400)
    repos = []
    for i in images_list:
        attrs = i.attrs
        if not attrs["RepoTags"]:
            continue
        for r in i.tags:
            repos.append(r)
    return api_success({"data": repos})


@bp.get("/compose_db")
@validate()
def compose_db_list(query: PageForm):
    db_query = db.session.query(ComposeDB).filter()
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        data.append(model2dict(item))
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.post("/compose_db")
@validate()
def compose_db_create(body: ComposeDBForm):
    if db.session.query(ComposeDB).filter(or_(ComposeDB.name == body.name, ComposeDB.path == body.path)).count():
        return api_fail(msg="compose已存在", code=400)
    ComposeDB.create(name=body.name, path=body.path)
    return api_success({})


@bp.delete("/compose_db/<int:pk>")
def compose_db_delete(pk):
    ComposeDB.get_by_id(pk).delete()
    return api_success({})


@bp.post("/compose_db/<int:pk>/build")
def compose_db_build(pk):
    # todo
    instance = ComposeDB.get_by_id(pk)
    # scheduler.add_job(f"build_compose", task.compose_build, args=(instance.id,))
    return api_success({})


@bp.get("/compose_runner")
@validate()
def compose_runner_list(query: PageForm):
    db_query = db.session.query(ComposeRunner).filter()
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        data.append(model2dict(item))
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.get("/resource")
@validate()
def docker_resource_list(query: PageForm):
    db_query = db.session.query(DockerResource).filter()
    resource_type = request.args.get("type")
    if resource_type:
        db_query = db_query.filter(DockerResource.resource_type == resource_type)
    page = db_query.paginate(page=query.page, per_page=query.page_size)
    data = []
    for item in page.items:
        info = model2dict(item)
        info["docker_type_name"] = item.docker_type_name
        info["status_name"] = item.status_name
        data.append(info)
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.post("/resource")
@validate()
def docker_resource_create(body: DockerResourceForm):
    DockerResource.create(**body.dict())
    return api_success()


@bp.put("/resource/<int:pk>")
@validate()
def docker_resource_update(pk: int, body: DockerResourceForm):
    instance = DockerResource.get_by_id(pk)
    # 判断是否修改了镜像
    if instance.image != body.image or instance.docker_type != body.docker_type:
        instance.status = DockerResource.STATUS_INIT
    instance.name = body.name
    instance.resource_type = body.resource_type
    instance.image = body.image
    instance.docker_type = body.docker_type
    instance.description = body.description
    instance.save()
    return api_success()


@bp.post("/resource/<int:pk>/build")
def docker_resource_build(pk):
    """
        资源编译
    """
    resource = DockerResource.get_by_id(pk)
    if resource.docker_type == DockerResource.DOCKER_TYPE_LOCAL_IMAGE:
        try:
            client = APIClient(Config.get_config(Config.KEY_DOCKER_API))
        except DockerException as e:
            logger.exception(e)
            return api_fail(msg="Docker初始化失败")
        img = client.images(resource.image)
        if img:
            resource.status = DockerResource.STATUS_BUILD
            resource.save()
        else:
            return api_fail(msg="本地镜像不存在")
    else:
        task.delay_docker_resource_build.apply_async(args=(pk,))
    return api_success()


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
    return api_success(results)


@bp.post("/resource/sync")
def docker_resource_sync():
    url = request.get_json().get("url")
    try:
        res = requests.get(url, verify=False, timeout=10)
    except requests.exceptions.RequestException as e:
        logger.error(e)
        return api_fail(msg="同步失败、同步服务器连接失败", code=400)
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
    return api_success(results)


@bp.delete("/resource/<int:pk>")
def resource_delete(pk):
    logger.info(db.session.query(Question).filter(Question.resource_id == pk).all())
    try:
        DockerResource.get_by_id(pk).delete()
    except IntegrityError as e:
        logger.exception(e)
        db.session.rollback()
        return api_fail(msg="资源占用中、当前状态无法删除,请检查引用对象!", code=400)
    return api_success({})
