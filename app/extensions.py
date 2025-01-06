from celery import Celery
from flask_redis import FlaskRedis

# noinspection PyUnresolvedReferences
from app.models import db
from config import config

cache = FlaskRedis()

celery = Celery(__name__)
celery.config_from_object(config)

# 配置 Celery 日志
celery.conf.update(
    worker_hijack_root_logger=False,  # 不使用根日志记录器
    worker_redirect_stdouts=False,    # 不重定向标准输出
)
