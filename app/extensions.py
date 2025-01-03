from celery import Celery
from flask_redis import FlaskRedis
from flask_sqlalchemy import SQLAlchemy

from config import config

cache = FlaskRedis()
db = SQLAlchemy()
celery = Celery(__name__)
celery.config_from_object(config)
