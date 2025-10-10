import logging
import os
from datetime import datetime
from urllib.parse import urlparse

import docker
import git
import requests
import yaml
from docker.errors import NotFound

from app.core.const import ConstCacheKey
from app.core.flask_celery import ContextTask
from app.extensions import cache, celery, db
from app.models.admin import Config
from app.models.ctf import CtfResource, ImageResource
from app.models.docker import DockerResource
from app.sys import service
from app.utils.tools import find_directories_with_filename
from config import config

logger = logging.getLogger()


@celery.task(base=ContextTask)
def beat_destroy_container():
    """
    清楚过期容器  容错
    """
    for ctf_resource in db.session.query(CtfResource).filter(
        CtfResource.destroy_time < datetime.now()
    ):
        client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API))
        # 默认一个docker run 只能绑定一个用户吧 所以直接删除docker run  采用数据库的连表删除自动删除其他索引
        try:
            container = client.containers.get(ctf_resource.docker_runner.container_id)
            container.stop()
            container.remove()
        except NotFound:
            logger.warning("环境异常:{}".format(ctf_resource.docker_runner.container_id))

        docker_run = ctf_resource.docker_runner
        name = docker_run.name
        db.session.delete(docker_run)
        db.session.commit()
        logger.info("destroy container:{}".format(name))


@celery.task(base=ContextTask)
def build_question_tar(image_id):
    """
    编译上传的tar包为image
    """
    logger.info("start build image | {}".format(image_id))
    image = db.session.query(ImageResource).get(image_id)
    if not image:
        logger.info("image not found")
    if image.host.docker_api.startswith("http"):
        _url = urlparse(image.host.docker_api)
        address = "{}:{}".format(_url.hostname, _url.port)
    else:
        address = image.host.docker_api
    cli = docker.DockerClient(base_url=address)
    dist_file_path = os.path.join(config.BASE_DIR, "upload", image.file.file_path)
    try:
        for line in cli.build(
            fileobj=open(dist_file_path, "rb"),
            rm=True,
            tag=f"{image.name}:{image.version}",
            custom_context=True,
        ):
            logger.info(line)
            cache.lpush(ConstCacheKey.TASK_BUILD_LOG % image.id, line)
        image.status = ImageResource.STATUS_SUCCESS
    except docker.errors.APIError as e:
        logger.exception(e)
        image.status = ImageResource.STATUS_ERROR
        image.build_result = "镜像文件错误"
    except requests.exceptions.ConnectionError as e:
        logger.exception(e)
        image.build_result = "docker api 链接失败"
    except FileNotFoundError as e:
        logger.exception(e)
        image.status = ImageResource.STATUS_ERROR
        image.build_result = "镜像文件不存在"
        image.file = None
    db.session.commit()
    logger.info(f"build finish{image.id}")


@celery.task(base=ContextTask)
def sync_ctf_question_repo(repo, admin_id=None):
    repo_name = repo.split("/")[-1].split(".")[0]
    username = repo.split("/")[-2]
    local_repo = f"/opt/vulnerability/{username}/{repo_name}"
    # 判断本地目录是否存在
    try:
        if os.path.exists(local_repo):
            logger.info(f"Pull To {local_repo}")
            git.Repo(local_repo).git.pull()
        else:
            logger.info(f"Clone {repo} to {local_repo}")
            git.Repo.clone_from(repo, local_repo)
    except git.exc.GitCommandError as e:
        service.create_admin_message(admin_id, f"同步远程CTF仓库失败\n{e}")
        logger.error(e)
        return
    docker_api = Config.get_config(Config.KEY_DOCKER_API)
    client = docker.DockerClient(docker_api)
    vulnerabilities = find_directories_with_filename(local_repo, filename="metadata.yml")
    for directory in vulnerabilities:
        with open(os.path.join(directory, "metadata.yml")) as f:
            yaml_data = yaml.safe_load(f)
        image = yaml_data["image"]
        name = yaml_data["name"]
        docker_file = os.path.join(directory, "Dockerfile")
        # 判断镜像是否已经存在
        obj = db.session.query(DockerResource).filter(DockerResource.image == image).first()
        if not obj:
            obj = DockerResource(
                name=name,
                resource_type="CTF",
                image=image,
                description=yaml_data["description"],
                cve=yaml_data.get("cve", []),
                app=yaml_data.get("app"),
            )
        if os.path.exists(docker_file):
            # 本地编译
            obj.dockerfile = docker_file
            obj.docker_type = DockerResource.DOCKER_TYPE_LOCAL_IMAGE
        else:
            # 远程镜像
            obj.docker_type = DockerResource.DOCKER_TYPE_REMOTE_IMAGE
        #  判断镜像是否存在
        try:
            client.images.get(image)
            obj.status = DockerResource.STATUS_BUILD
        except docker.errors.ImageNotFound:
            obj.status = DockerResource.STATUS_INIT
        except docker.errors.DockerException as e:
            logger.exception(e)
            obj.status = DockerResource.STATUS_INIT
        try:
            db.session.add(obj)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            logger.error(e)
            continue
        logger.info("Add Image:{}".format(image))
    service.create_admin_message(admin_id, "同步远程CTF仓库完成")
