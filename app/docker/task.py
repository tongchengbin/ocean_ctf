import json
import logging
from io import BytesIO

import docker.errors
from compose.cli.command import project_from_options
from docker import APIClient
from docker.errors import DockerException

from app.docker.service import user_compose_down
from app.models.admin import Config, TaskList
from app.models.docker import ComposeDB, DockerResource
from app.extensions import cache, celery

logger = logging.getLogger(__name__)


def compose_build(compose_id):
    instance = ComposeDB.get_by_id(compose_id)
    project_dir = instance.path
    project = project_from_options(project_dir, {})
    project.build()
    instance.status = ComposeDB.STATUS_BUILD
    instance.save()


@celery.task
def delay_compose_down(*args):
    user_compose_down(*args)


@celery.task
def delay_docker_resource_build(resource_id: int):
    """
        资源编译  编译之后的状态可以直接运行
    """
    resource = DockerResource.get_by_id(resource_id)
    try:
        client = APIClient(Config.get_config(Config.KEY_DOCKER_API))
    except DockerException as e:
        logger.exception(e)
        return
    # 清空 cache
    key = "DOCKER_RESOURCE_%s" % resource_id
    cache.delete(key)
    try:
        for log_dic in client.pull(resource.image, stream=True, decode=True):
            # 添加到日志
            logger.info(log_dic)
            cache.lpush(key, json.dumps(log_dic))
    except docker.errors.ImageNotFound:
        logger.warning("镜像不存在:{}".format(resource.image))
        return
    resource.status = DockerResource.STATUS_BUILD
    resource.save()
    logger.info("编译完成:{}".format(resource.name))


def task_add_log(task: int, line: dict):
    """
        处理日志存储
    """

    if isinstance(line, bytes):
        line = json.loads(line)
    task_key = "task_%s" % task
    if "progress" in line:
        cache.rpush(task_key, "%s:%s" % (line["status"], line["progress"]))
    elif "error" in line:
        cache.rpush(task_key, "%s:%s" % ("ERROR", line["error"]))
    elif "status" in line:
        cache.rpush(task_key, line["status"])
    elif "stream" in line:
        cache.rpush(task_key, line["stream"])
    else:
        cache.rpush(task_key, json.dumps(line))


@celery.task
def build_delay(task_id: int, build_type, tag, admin, pt=None, dockerfile=None):
    """
        编译镜像
    """
    task = TaskList.get_by_id(task_id)
    if not task:
        logger.error("任务ID不粗在:{}".format(task_id))
        return
    try:
        client = APIClient(Config.get_config(Config.KEY_DOCKER_API))
    except DockerException as e:
        logger.exception(e)
        return
    if build_type == 'tar':
        f = open(pt, 'rb')
        for line in client.build(fileobj=f, rm=True, tag=tag, custom_context=True):
            logger.info(line)
            task_add_log(task.id, line)
        task.status = task.STATUS_DONE
    elif build_type == 'pull':
        for line in client.pull(tag, stream=True, decode=True):
            task_add_log(task.id, line)
        task.status = task.STATUS_DONE
    else:
        try:
            f = BytesIO(dockerfile.encode('utf-8'))
            for line in client.build(fileobj=f, rm=True, tag=tag):
                logger.info(line)
                task_add_log(task.id, line)
            task.status = task.STATUS_DONE
        except DockerException as e:
            task.status = task.STATUS_ERROR
            task.remark = str(e)
            logger.exception(e)
            task_add_log(task_id,{"error":str(e)})
    task.save()


if __name__ == '__main__':
    build_delay(139, 14, 'pull', 'nginx:lastest', 1)

if __name__ == "__main__":
    from app import create_app

    create_app()
    # delay_docker_resource_build(1)
    start = 0
    data = []
    for log in cache.lrange("DOCKER_RESOURCE_1", start, -1):
        data.append(json.loads(log))
    print(data)
