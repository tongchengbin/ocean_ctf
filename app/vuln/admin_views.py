import logging

import docker
from docker.models.containers import ContainerCollection
from flask import Blueprint, jsonify, g
from flask import request
from sqlalchemy import or_

from app.extensions import db
from app.lib.tools import model2dict
from app.models.admin import Config
from app.models.docker import DockerResource, DockerRunner
from app.vuln.task import start_vuln_resource

logger = logging.getLogger(__name__)
bp = Blueprint("admin_vuln", __name__, url_prefix="/api/admin")


@bp.get("/vuln")
def vuln_list():
    """
        漏洞列表
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get('search')
    db_query = db.session.query(DockerResource)
    if search:
        db_query = db_query.filter(or_(DockerResource.name.contains(search) |
                                       DockerResource.app.contains(search) |
                                       DockerResource.cve.contains(search)
                                       ))
    page = db_query.paginate(page=page, per_page=page_size)
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


@bp.get("/vuln/<int:pk>")
def vuln_detail(pk):
    """
        漏洞列表
    """
    item = DockerResource.get_by_id(pk)
    return jsonify({
        "data": model2dict(item)
    })


@bp.put("/vuln/<int:pk>")
def vuln_update(pk):
    """
        漏洞列表
    """
    item = DockerResource.get_by_id(pk)
    data = request.get_json()
    item.description = data['description']
    item.docker_type = data['docker_type']
    item.image = data['image']
    item.name = data['name']
    item.cve = data.get("cve", [])
    item.app = data.get("app")
    item.save()

    return jsonify({
        "data": model2dict(item)
    })


@bp.post("/vuln")
def vuln_create():
    """
        添加漏洞
    """
    data = request.get_json()
    description = data['description']
    docker_type = data['docker_type']
    image = data['image']
    name = data['name']
    cve = data.get("cve", [])
    app = data.get("app")
    DockerResource.create(description=description, docker_type=docker_type, image=image, name=name, resource_type="VUL",
                          app=app, cve=cve)
    return jsonify({})


@bp.post("/vuln/<int:pk>/run")
def vuln_run(pk):
    """
        添加漏洞
    """
    start_vuln_resource(pk, user_id=None, admin_id=g.user.id)
    return jsonify({})


@bp.get("/vuln/runner")
def vuln_runner():
    """
        添加漏洞
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    db_query = db.session.query(DockerRunner).filter()
    page = db_query.paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        info = model2dict(item)
        info['resource'] = model2dict(item.resource)
        if item.user_id:
            info['username'] = item.user.username
        else:
            info['username'] = item.admin.username
        info['container_id'] = item.container_id[:8]
        data.append(info)
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.delete("/vuln/runner/<int:pk>")
def vuln_delete(pk):
    """
        销毁容器
    """
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    instance: DockerRunner = db.session.query(DockerRunner).get(pk)
    client = docker.DockerClient(docker_api)
    docker_container: docker.models.containers.Container = client.containers.get(instance.container_id)
    docker_container.stop()
    docker_container.remove()
    instance.delete()
    return jsonify({})
