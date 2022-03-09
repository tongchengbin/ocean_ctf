import logging
import os
from datetime import datetime
from urllib.parse import urlparse

import docker
import requests
from docker import errors as docker_error, APIClient
from config import config
from sqlalchemy.orm import sessionmaker
from app import db
from app.api.docker.service import fetch_system_info_by_docker_api
from app.models.ctf import ContainerResource, ImageResource
from app.models.docker import Host

logger = logging.getLogger('app')


def finish_container(container_id):
    """

        定时任务 定时结束容器
    """
    logger.info("recv container:%s" % container_id)
    session = sessionmaker(bind=db.engine)()
    container = session.query(ContainerResource).get(container_id)
    if not container: return
    if container.destroy_time > datetime.now():
        return
    try:
        client = docker.DockerClient(container.image_resource.host.docker_api, timeout=3)
        docker_container = client.containers.get(container.container_id)
        docker_container.kill()
        docker_container.remove()
    except docker_error.DockerException:
        pass
    session.delete(container)
    session.commit()
    logger.info("destroy container:%s" % container_id)


def build_question_tar(image_id):
    """
        编译上传的tar包为image
    """
    logger.info('start build image | {}'.format(image_id))
    db_session = sessionmaker(bind=db.engine)()
    image = db_session.query(ImageResource).get(image_id)
    if not image:
        logger.info("image not found")
    if image.host.docker_api.startswith("http"):
        _url = urlparse(image.host.docker_api)
        address = "{}:{}".format(_url.hostname, _url.port)
    else:
        address = image.host.docker_api
    cli = APIClient(base_url=address)
    dist_file_path = os.path.join(config.BASE_DIR, 'upload', image.file.split("|")[1])
    try:
        for line in cli.build(fileobj=open(dist_file_path, 'rb'), rm=True,
                              tag=f"{image.name}:{image.version}",
                              custom_context=True):
            logger.info(line)
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
    db_session.commit()
    logger.info(f"build finish{image.build_result}")


def crontab_monitoring_docker_api():
    """"
    定时检测dockers api 可用性
    """
    db_session = sessionmaker(bind=db.engine)()
    query = db_session.query(Host).all()
    for item in query:
        try:
            system_info = fetch_system_info_by_docker_api(item.docker_api)
            if system_info:
                item.online_time = datetime.now()
        except docker.errors.DockerException:
            pass
    db_session.commit()
    logger.info("crontab_monitoring_docker_api ok")
