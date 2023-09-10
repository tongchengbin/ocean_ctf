import logging

import docker
import sqlalchemy
from docker.errors import NotFound
from sqlalchemy import or_, func
from sqlalchemy.exc import IntegrityError

from app.extensions import db

from flask import Blueprint, request, g

from app.lib.api import api_fail, api_success
from app.lib.decorators import user_required
from app.lib.tools import model2dict
from app.models.admin import Config
from app.models.docker import DockerResource, DockerRunner
from app.vuln.task import start_vuln_resource

logger = logging.getLogger(__name__)
bp = Blueprint("user_vuln", __name__, url_prefix="/api/")


@bp.get("/vuln")
@user_required(required=False)
def vuln_list():
    """
        漏洞列表
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get('search')
    out_ip = Config.get_config(Config.KEY_IP)
    db_query = db.session.query(DockerResource).filter(DockerResource.status == DockerResource.STATUS_BUILD,
                                                       DockerResource.resource_type == "VUL")
    if search:
        db_query = db_query.filter(or_(DockerResource.name.contains(search) |
                                       DockerResource.app.contains(search) |
                                       DockerResource.cve.contains(search)
                                       ))
    if g.user:
        runner = db.session.query(DockerRunner).filter(DockerRunner.user_id == g.user.id)
        rids = {i.resource_id: i for i in runner}
    else:
        rids = {}
    page = db_query.paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        info = model2dict(item)
        info["docker_type_name"] = item.docker_type_name
        info["status_name"] = item.status_name
        rid: DockerRunner = rids.get(item.id)
        if rid:
            info['runner'] = {
                "id": rid.id,
                "out_ip": out_ip,
                "port_info": rid.port_info

            }
        else:
            info['runner'] = {}
        data.append(info)
    return api_success({
        "total": page.total,
        "data": data
    })


@bp.get("/vuln/apps")
def vuln_apps():
    query = db.session.query(DockerResource.app, func.count(DockerResource.id)).filter(
        DockerResource.resource_type == "VUL").group_by(
        DockerResource.app)
    data = []
    for (app, cnt) in query.all():
        data.append({"app": app, "cnt": cnt})
    return api_success({"data": data})


@bp.get("/vuln/<int:pk>")
def vuln_detail(pk):
    instance = DockerResource.get_by_id(pk)
    return api_success({"data": model2dict(instance)})


@bp.post("/vuln/<int:pk>/start")
@user_required()
def vuln_start(pk):
    try:
        start_vuln_resource(pk, user_id=g.user.id)
    except IntegrityError:
        return api_fail(msg="请勿重复创建环境")
    except ValueError:
        return api_fail(msg="资源启动失败,请联系管理员!")
    return api_success()


@bp.post("/vuln/<int:pk>/stop")
@user_required()
def vuln_stop(pk):
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    instance: DockerRunner = db.session.query(DockerRunner).filter(DockerRunner.user_id == g.user.id,
                                                                   DockerRunner.resource_id == pk).first()
    if not instance:
        return api_success()
    client = docker.DockerClient(docker_api)
    try:
        docker_container = client.containers.get(instance.container_id)
        docker_container.stop()
        docker_container.remove()
    except NotFound:
        pass
    instance.delete()
    return api_success()
