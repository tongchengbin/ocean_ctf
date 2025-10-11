from celery import Celery
from flask_redis import FlaskRedis
from flask_socketio import SocketIO

# noinspection PyUnresolvedReferences
from app.models import db  # noqa
from config import config

cache = FlaskRedis()

celery = Celery(__name__)
celery.config_from_object(config)

socketio = SocketIO(cors_allowed_origins="*")
