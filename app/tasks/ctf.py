import logging, os
from datetime import datetime
from urllib.parse import urlparse

import docker
import requests
from docker import errors as docker_error, APIClient

from app.lib.const import ConstCacheKey
from config import config
from sqlalchemy.orm import sessionmaker
from app.extensions import db, cache
from app.docker.service import fetch_system_info_by_docker_api
from app.models.ctf import CtfResource, ImageResource
from app.models.docker import Host

logger = logging.getLogger('app')




