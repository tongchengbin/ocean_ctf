import json
import logging
import os
from datetime import datetime
from io import BytesIO

import docker.errors
from docker import APIClient
from docker import errors as docker_error
from docker.errors import DockerException
from requests import delete

from app.core.flask_celery import ContextTask
from app.extensions import cache, celery
from app.models.admin import Config, TaskList
from app.models.docker import DockerResource

logger = logging.getLogger(__name__)


@celery.task(base=ContextTask, bind=True)
def docker_build_resource(self, resource_id: int):
    # 获取当前任务ID
    task_id = self.request.id
    logger.info(f"docker_build_resource:{resource_id}, task_id:{task_id}")
    resource = DockerResource.get_by_id(resource_id)
    
    # 使用任务ID作为日志键
    log_key = "DOCKER_BUILD_LOG_%s" % task_id
    
    try:
        client = APIClient(Config.get_config(Config.KEY_DOCKER_API))
    except DockerException as e:
        logger.exception(e)
        return
    # 删除key
    cache.delete(log_key)
    if resource.docker_type == DockerResource.DOCKER_TYPE_LOCAL_IMAGE:
        # 判断是否有docker file
        logs = []
        if resource.dockerfile:
            try:
                directory = os.path.dirname(resource.dockerfile)
                logger.info(f"build {resource.image} images <- {directory}")
                ret = client.build(
                    path=directory, tag=resource.image, dockerfile=resource.dockerfile
                )
                for chunk in ret:
                    log_item = json.loads(chunk)
                    stream = log_item.get("stream")
                    if stream:
                        logs.append(stream)
                    err_log = log_item.get("errorDetail")
                    if err_log:
                        logs.append(err_log["message"])
                        resource.logs = "\n".join(logs)
                        resource.status = DockerResource.STATUS_BUILD_ERROR
                        resource.save()
                    # save to redis 使用任务ID作为键
                    cache.lpush(log_key, chunk)
                    # 设置过期时间 1小时
                    cache.expire(log_key, 3600)
                    logger.info(json.loads(chunk))
                logger.info(f"build success {resource.image}")
            except docker_error.DockerException as e:
                logger.exception(e)
            logger.info(resource.image)
            img = client.images(resource.image)
        else:
            # 本地镜像但没有 Dockerfile,直接检查镜像是否存在
            img = client.images(resource.image)
            if not img:
                error_msg = f"镜像 {resource.image} 不存在,请先构建或拉取镜像"
                logger.error(error_msg)
                resource.logs = error_msg
                resource.status = DockerResource.STATUS_BUILD_ERROR
                resource.save()
                # 保存错误信息到 Redis,使用任务ID作为键
                cache.lpush(log_key, json.dumps({
                    "error": error_msg,
                    "timestamp": str(datetime.now())
                }))
                # 设置过期时间 1小时
                cache.expire(log_key, 3600)
                return
        
        if img:
            resource.status = DockerResource.STATUS_BUILD
            resource.save()
            logger.info(f"镜像 {resource.image} 验证成功")
        
    else:
        # 清空 cache
        key = "DOCKER_BUILD_%s" % resource_id
        cache.delete(key)
        try:
            for log_dic in client.pull(resource.image, stream=True, decode=True):
                # 添加到日志
                logger.info(log_dic)
                cache.lpush(key, json.dumps(log_dic))
        except docker.errors.ImageNotFound as e:
            logger.exception(e)
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


@celery.task(base=ContextTask)
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
    try:
        if build_type == "tar":
            f = open(pt, "rb")
            for line in client.build(fileobj=f, rm=True, tag=tag, custom_context=True):
                logger.info(line)
                task_add_log(task.id, line)
            task.status = task.STATUS_DONE
        elif build_type == "pull":
            for line in client.pull(tag, stream=True, decode=True):
                task_add_log(task.id, line)
            task.status = task.STATUS_DONE
        else:
            f = BytesIO(dockerfile.encode("utf-8"))
            for line in client.build(fileobj=f, rm=True, tag=tag):
                logger.info(line)
                task_add_log(task.id, line)
            task.status = task.STATUS_DONE
    except DockerException as e:
        task.status = task.STATUS_ERROR
        task.remark = str(e)
        logger.error(e)
        task_add_log(task_id, {"error": str(e)})
    task.save()
