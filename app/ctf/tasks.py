import logging
from datetime import datetime

import docker
from docker.errors import NotFound

from app.extensions import celery, db
from app.models.admin import Config
from app.models.ctf import Question, CtfResource

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
        db.session.delete(ctf_resource)
        db.session.delete(docker_run)
        db.session.commit()
        logger.info("destroy container:{}".format(name))
