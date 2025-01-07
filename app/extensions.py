from celery import Celery
from flask_redis import FlaskRedis

# noinspection PyUnresolvedReferences
from app.models import db
from config import config

cache = FlaskRedis()

celery = Celery(__name__)
celery.config_from_object(config)
