import logging
import os
import random
import shutil

import docker
from docker.errors import ImageNotFound, NotFound
from app import db
from app.lib.tools import generate_flag
from app.models.admin import Config
from app.models.docker import ComposeRunner, ComposeDB, DockerResource, DockerRunner
from compose.cli.command import project_from_options
import compose

logger = logging.getLogger(__name__)


def fetch_system_info_by_docker_api(docker_api):
    try:
        client = docker.DockerClient(docker_api, timeout=1)
    except docker.errors.DockerException:
        return {}
    info = client.info()
    os = info["OperatingSystem"]
    info = client.info()
    data = {
        "os": os,
        "cpu": info["NCPU"],
        "memory": round(info["MemTotal"] / 1024 / 1024 / 1024, 2)
    }
    return data


def user_compose_down(compose_runner_id):
    runner = ComposeRunner.get_by_id(compose_runner_id)

    try:
        project = project_from_options(runner.project_dir, {})
        options = {'--remove-orphans': False,
                   '--rmi': None,
                   '--timeout': None,
                   '--volumes': False}
        project.down("ImageType.none", options["--volumes"], options['--remove-orphans'])
    except compose.config.errors.ComposeFileNotFound:
        pass
    try:
        shutil.rmtree(runner.project_dir)
    except FileNotFoundError:
        pass
    runner.delete()
    return True


def user_compose_up(compose_id, user_id) -> (str, str):
    # 拷贝目录到/data 运行
    compose = ComposeDB.get_by_id(compose_id)
    project_dir = compose.path
    new_name = project_dir.lstrip("/").replace("/", "_")
    # 拷贝文件到临时目录
    # 判断上级目录是否存在
    if not os.path.exists("/data/compose_runtime"):
        os.makedirs("/data/compose_runtime")
    runtime_project_dir = f"/data/compose_runtime/{new_name}_{user_id}"
    if os.path.exists(runtime_project_dir):
        shutil.rmtree(runtime_project_dir)
    os.system(f"cp -r {project_dir} {runtime_project_dir}")
    options = {'--project-directory': runtime_project_dir}
    project = project_from_options(runtime_project_dir, options)
    containers = project.up()
    ports = {}
    flag = generate_flag()
    for container in containers:
        command = "/start.sh '{0}' || echo {0} > /flag".format(flag)
        exec_id = container.create_exec(command)["Id"]
        out = container.start_exec(exec_id)
        for k, v in container.ports.items():
            if v is None:
                continue
            port, _ = k.split("/")
            for host_port in v:
                if host_port["HostIp"] == "0.0.0.0":
                    ports[port] = host_port["HostPort"]
    compose_runner = db.session.query(ComposeRunner).filter(ComposeRunner.project_dir == project_dir).first()
    if compose_runner:
        compose_runner.name = f"{user_id}" + compose.name
        compose_runner.port_info = ports
        compose_runner.flag = flag
        compose_runner.save()
    else:
        compose_runner = ComposeRunner.create(name=f"{user_id}" + compose.name, compose_id=compose_id,
                                              user_id=user_id, type=ComposeRunner.TYPE_USER,
                                              port_info=ports, project_dir=runtime_project_dir, flag=flag)

    return compose_runner.id, flag


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
    image_config = image.attrs["ContainerConfig"]
    port_range = Config.get_config(Config.KEY_PORT_RANGE)
    try:
        start_port, end_port = port_range.split("-")
        start_port, end_port = int(start_port), int(end_port)
        assert start_port < end_port
    except (AssertionError, ValueError, IndexError):
        raise ValueError("服务器缺少资源、请联系管理员")
    if "ExposedPorts" in image_config:
        port_dict = image.attrs["ContainerConfig"]["ExposedPorts"]
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
    logger.info(flag)
    if flag:
        command = "sh -c \"sh start.sh \\\"{0}\\\" || echo \\\"{0}\\\" >/flag\"".format(flag)
        logger.info("run {}".format(command))
        output = docker_container.exec_run(cmd=command, detach=True)
        logger.info(output)
    # 查看是否有历史记录
    docker_runner = db.session.query(DockerRunner).filter(DockerRunner.name == docker_container.name).first()
    if docker_runner:
        docker_runner.container_id = docker_container.id
        docker_runner.port_info = port_dict
        docker_runner.save()
    else:
        docker_runner = DockerRunner.create(name=docker_container.name, resource_id=resource_id,
                                            type=DockerRunner.TYPE_USER, port_info=port_dict,
                                            user_id=user_id,
                                            container_id=docker_container.id)
    return docker_runner


def destroy_docker_runner(docker_runner_id):
    docker_runner = DockerRunner.get_by_id(docker_runner_id)
    client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
    try:
        docker_container = client.containers.get(docker_runner.container_id)
        docker_container.stop()
        docker_container.remove()
    except NotFound:
        logger.warning("容器未找到：{}".format(docker_runner.name))

    docker_runner.delete()
    return True
