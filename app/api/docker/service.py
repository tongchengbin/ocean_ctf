import os
import shutil

import docker

from app.lib.tools import generate_flag
from app.models.docker import ComposeRunner, ComposeDB
from app.extensions import db
from compose.cli.command import project_from_options
import compose


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
    print(ports)
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


if __name__ == "__main__":
    from app import create_app, db

    create_app().app_context().push()
    user_compose_up(6, 1)
