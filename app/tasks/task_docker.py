import json
from io import BytesIO
from urllib.parse import urlparse

from docker import APIClient, errors as docker_error

from app import cache
from app import db
from app.models.admin import TaskList
from app.models.docker import Host
import logging

logger = logging.getLogger('app')


def docker_out_format(data):
    """
        格式化 docker输出
    """
    if not isinstance(data, dict):
        data = json.loads(data)
    if data.get("status") == 'Downloading':
        return data["progress"]
    else:
        return data.get("stream")



