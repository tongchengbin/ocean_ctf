from flask_sqlalchemy import SQLAlchemy
from flask_redis import FlaskRedis
from celery import Celery
from config import config
db = SQLAlchemy()

cache = FlaskRedis()

celery = Celery(__name__)
celery.config_from_object(config)
