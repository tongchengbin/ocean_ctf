import json
import logging
from compose.cli.command import project_from_options
from docker import APIClient
from docker.errors import DockerException

from app.api.docker.service import user_compose_down
from app.models.admin import Config
from app.models.docker import ComposeDB, DockerResource
from app.extensions import scheduler, cache

logger = logging.getLogger(__name__)


def compose_build(compose_id):
    scheduler.app.app_context().push()
    instance = ComposeDB.get_by_id(compose_id)
    project_dir = instance.path
    project = project_from_options(project_dir, {})
    project.build()
    instance.status = ComposeDB.STATUS_BUILD
    instance.save()


def delay_compose_down(*args):
    scheduler.app.app_context().push()
    user_compose_down(*args)


def delay_docker_resource_build(resource_id: int):
    """
        资源编译  编译之后的状态可以直接运行
    """
    scheduler.app.app_context().push()
    resource = DockerResource.get_by_id(resource_id)
    try:
        client = APIClient(Config.get_config(Config.KEY_DOCKER_API))
    except DockerException as e:
        logger.exception(e)
        return
    logger.info("============start build {}".format(resource.image))
    # 清空 cache
    key = "DOCKER_RESOURCE_%s" % resource_id
    cache.delete(key)
    for log_dic in client.pull(resource.image, stream=True, decode=True):
        # 添加到日志
        logger.info(log_dic)
        cache.lpush(key, json.dumps(log_dic))
    resource.status = DockerResource.STATUS_BUILD
    resource.save()
    logger.info("编译完成:{}".format(resource.name))


if __name__ == "__main__":
    from app import create_app

    create_app()
    # delay_docker_resource_build(1)
    start =0
    data = []
    for log in cache.lrange("DOCKER_RESOURCE_1",start,-1):
        data.append(json.loads(log))
    print(data)