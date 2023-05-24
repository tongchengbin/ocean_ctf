import logging

import docker
from docker.errors import ImageNotFound

from app import db
from app.api.docker.service import get_free_port
from app.models.admin import Config
from app.models.docker import DockerRunner, DockerResource

logger = logging.getLogger(__name__)


def start_vuln_resource(resource_id, user_id=None, admin_id=None) -> DockerRunner:
    """
        启动docker 资源
    """
    if user_id is None and admin_id is None:
        raise ValueError()
    resource = DockerResource.get_by_id(resource_id)
    client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
    try:
        image = client.images.get(resource.image)
    except ImageNotFound as e:
        logger.exception(e)
        raise ValueError("当前题目环境缺失、请联系管理员！")
    # 解析镜像端口
    image_config = image.attrs['Config']
    port_range = Config.get_config(Config.KEY_PORT_RANGE)
    try:
        start_port, end_port = port_range.split("-")
        start_port, end_port = int(start_port), int(end_port)
        assert start_port < end_port
    except (AssertionError, ValueError, IndexError):
        raise ValueError("服务器缺少资源、请联系管理员")
    if "ExposedPorts" in image_config:
        port_dict = image_config["ExposedPorts"]
        for docker_port, host_port in port_dict.items():
            port_dict[docker_port] = get_free_port(start_port, end_port)
    else:
        port_dict = {}
    image_name = image.attrs["RepoTags"][0].replace(":", ".")
    container_name = f"{image_name}_{user_id}".replace("/", "-")
    # 检查docker 是否已存在
    try:
        c = client.containers.get(container_name)
        c.stop()
        c.remove()
    except docker.errors.NotFound:
        pass
    try:
        docker_container = client.containers.run(image=image.id, name=container_name, ports=port_dict,
                                                 detach=True)
    except docker.errors.APIError as e:
        logger.exception(e)
        raise ValueError("题目启动失败")
    # 查看是否有历史记录
    docker_runner = db.session.query(DockerRunner).filter(DockerRunner.name == docker_container.name).first()
    if docker_runner:
        docker_runner.container_id = docker_container.id
        docker_runner.port_info = port_dict
        docker_runner.save()
    else:
        docker_runner = DockerRunner.create(name=docker_container.name, resource_id=resource_id,
                                            admin_id=admin_id,user_id=user_id, port_info=port_dict,
                                            container_id=docker_container.id)
    return docker_runner

