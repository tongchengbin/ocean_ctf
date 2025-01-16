import logging
from datetime import datetime

import docker
from docker.errors import DockerException

from app.core.flask_celery import ContextTask
from app.extensions import db, celery
from app.models.admin import Config
from app.models.ctf import CtfResource

logger = logging.getLogger('app')


@celery.task(base=ContextTask)
def ctf_finish_container(container_id, current=False):
    """
        启动题目后自动销毁
        定时任务 定时结束容器
    """
    logger.info("Start CTF Container finish:%s" % container_id)
    resource = db.session.query(CtfResource).get(container_id)
    if not resource:
        logger.info("container not found:{}".format(container_id))
        return
    if not current and resource.destroy_time > datetime.now():
        logger.info(f"{datetime.now()} -> {resource.destroy_time}")
        logger.info("container time is delay ")
        return
    runner = resource.docker_runner
    try:
        client = docker.DockerClient(Config.get_config(Config.KEY_DOCKER_API), timeout=3)
        docker_container = client.containers.get(runner.container_id)
        docker_container.kill()
        docker_container.remove()
    except DockerException:
        pass
    db.session.delete(runner)
    db.session.commit()
    logger.info("destroy container:%s" % container_id)
