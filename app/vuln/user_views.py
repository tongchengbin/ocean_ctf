import logging

import docker
from sqlalchemy import or_

from app.extensions import db

from flask import Blueprint, request, jsonify, g

from app.lib.decorators import login_required, user_required
from app.lib.rest_response import success
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
    db_query = db.session.query(DockerResource).filter(DockerResource.status == DockerResource.STATUS_BUILD)
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
    return success({
        "total": page.total,
        "data": data
    })


@bp.get("/vuln/<int:pk>")
def vuln_detail(pk):
    instance = DockerResource.get_by_id(pk)
    return success(model2dict(instance))


@bp.post("/vuln/<int:pk>/start")
@user_required()
def vuln_start(pk):
    start_vuln_resource(pk, user_id=g.user.id)
    return success()


@bp.post("/vuln/<int:pk>/stop")
@user_required()
def vuln_stop(pk):
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    instance: DockerRunner = db.session.query(DockerRunner).filter(DockerRunner.user_id == g.user.id,
                                                                   DockerRunner.resource_id == pk).first()
    if not instance:
        return success()
    client = docker.DockerClient(docker_api)
    docker_container = client.containers.get(instance.container_id)
    docker_container.stop()
    docker_container.remove()
    instance.delete()
    return success()
