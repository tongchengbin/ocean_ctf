import logging
import os
from datetime import datetime
from urllib.parse import urlparse

import docker
import requests
from docker.errors import NotFound

from app.extensions import celery, db, cache
from app.lib.const import ConstCacheKey
from app.models.admin import Config
from app.models.ctf import CtfResource, ImageResource
from config import config

logger = logging.getLogger()


@celery.task()
def beat_destroy_container():
    """
        清楚过期容器  容错
    """
    for ctf_resource in db.session.query(CtfResource).filter(CtfResource.destroy_time < datetime.now()):
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


def build_question_tar(image_id):
    """
        编译上传的tar包为image
    """
    logger.info('start build image | {}'.format(image_id))
    image = db.session.query(ImageResource).get(image_id)
    if not image:
        logger.info("image not found")
    if image.host.docker_api.startswith("http"):
        _url = urlparse(image.host.docker_api)
        address = "{}:{}".format(_url.hostname, _url.port)
    else:
        address = image.host.docker_api
    cli = docker.DockerClient(base_url=address)
    dist_file_path = os.path.join(config.BASE_DIR, 'upload', image.file.file_path)
    try:
        for line in cli.build(fileobj=open(dist_file_path, 'rb'), rm=True,
                              tag=f"{image.name}:{image.version}",
                              custom_context=True):
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
