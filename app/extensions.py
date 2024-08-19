from flask_sqlalchemy import SQLAlchemy
from flask_redis import FlaskRedis
from celery import Celery

from app.models.base import Base
from config import config
db = SQLAlchemy(model_class=Base)

cache = FlaskRedis()

celery = Celery(__name__)
celery.config_from_object(config)
