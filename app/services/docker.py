import logging
import random

import docker
from docker.errors import ImageNotFound, NotFound

from app.extensions import db
from app.models.admin import Config
from app.models.docker import DockerResource, DockerRunner

logger = logging.getLogger(__name__)


def get_free_port(start_port: int, end_port: int):
    # todo 检查端口是否被暂用
    random_port = str(random.randint(start_port, end_port))
    return random_port


def start_docker_resource(resource_id, user_id, flag=None) -> DockerRunner:
    """
    启动docker 资源
    """
    resource = DockerResource.get_by_id(resource_id)
    client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
    try:
        image = client.images.get(resource.image)
    except ImageNotFound as e:
        logger.warning(e)
        raise ValueError("当前题目环境缺失、请联系管理员！")
    # 解析镜像端口
    logger.info("{}".format(image.attrs))
    image_config = image.attrs["Config"]
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
        docker_container = client.containers.run(
            image=image.id, name=container_name, ports=port_dict, detach=True
        )
    except docker.errors.APIError as e:
        logger.exception(e)
        raise ValueError("题目启动失败")

    if flag:
        command = 'sh -c "sh /start.sh \\"{0}\\" || echo \\"{0}\\" >/flag"'.format(flag)
        logger.info("run {}".format(command))
        output = docker_container.exec_run(cmd=command, detach=True)
        logger.info(output)
    # 查看是否有历史记录
    docker_runner = (
        db.session.query(DockerRunner).filter(DockerRunner.name == docker_container.name).first()
    )
    if docker_runner:
        docker_runner.container_id = docker_container.id
        docker_runner.port_info = port_dict
        docker_runner.save()
    else:
        docker_runner = DockerRunner.create(
            name=docker_container.name,
            resource_id=resource_id,
            type=DockerRunner.TYPE_USER,
            port_info=port_dict,
            user_id=user_id,
            container_id=docker_container.id,
        )
    return docker_runner


def destroy_docker_runner(docker_runner_id):
    docker_runner = db.session.query(DockerRunner).get(docker_runner_id)
    client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
    try:
        docker_container = client.containers.get(docker_runner.container_id)
        docker_container.stop()
        docker_container.remove()
    except NotFound:
        logger.warning("容器未找到：{}".format(docker_runner.name))
    db.session.delete(docker_runner)
    db.session.commit()
    return True
