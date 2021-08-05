from datetime import datetime
import docker
from sqlalchemy.orm import sessionmaker

from app import celery_app

from app import db
from app.models.ctf import ContainerResource
from app.models.user import User
from docker import errors as docker_error
import logging
logger = logging.getLogger('app')


@celery_app.task
def finish_container(container_id):
    """

        定时任务 定时结束容器
    """
    logger.info("recv container:%s"%container_id)
    session = sessionmaker(bind=db.engine)()
    container = session.query(ContainerResource).get(container_id)
    if container.destroy_time > datetime.now():
        return
    try:
        client = docker.DockerClient("http://{}".format(container.image_resource.host.addr), timeout=3)
        docker_container = client.containers.get(container.container_id)
        docker_container.kill()
        docker_container.remove()
    except docker_error.DockerException:
        pass
    session.delete(container)
    session.commit()
    logger.info("destroy container:%s"%container_id)
