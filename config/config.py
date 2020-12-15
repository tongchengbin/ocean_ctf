# 配置文件
import logging.handlers
import os

from celery.schedules import crontab

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DEBUG = False


DB_CONFIG = {
    "user": 'root',
    "password": '123456',
    "host": '127.0.0.1',
    "port": "3306",
    "db":"ocean"
}


# 跨域配置
CSRF_ENABLED = True
CSRF_SESSION_KEY = os.getenv("CSRF_SESSION_KEY", "")

# 日志配置
LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'minimalistic': {
            'format': '%(message)s',
        },
        'basic': {
            'format': '%(levelname)-4.4s [%(name)s] %(message)s',
        },
        'full': {
            'format':
                '%(asctime)s - %(levelname)-4.4s [%(name)s,%(filename)s:%(lineno)d] %(message)s',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'basic',
            'level': logging.DEBUG,
            'stream': 'ext://sys.stdout',
        },
        'console_mini': {
            'class': 'logging.StreamHandler',
            'formatter': 'minimalistic',
            'level': logging.NOTSET,
            'stream': 'ext://sys.stdout',
        },
        'info_file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'full',
            'filename': os.path.join(BASE_DIR, '../info.log'),
            'maxBytes': 100000,
            'backupCount': 1,
        },
        'error_file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'full',
            'filename': os.path.join(BASE_DIR, '../error.log'),
            'maxBytes': 100000,
            'backupCount': 1,
            'level': logging.WARNING,
        },
    },

    'loggers': {
        '': {
            'level': 'DEBUG',
            'handlers': ['console'],
        },
        'werkzeug': {
            'handlers': ['console_mini'],
            'propagate': False,
        }
    }
}


REDIS_CONFIG = {
    "host":'127.0.0.1',
    'password':""
}

# end config

try:
    from local_config import *
except ImportError:
    pass

THREADS_PER_PAGE = 2
SQLALCHEMY_ECHO = False
DATABASE_CONNECT_OPTIONS = {}
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = "mysql+mysqldb://{user}:{password}@{host}:{port}/{db}".format(**DB_CONFIG)

#  定时任务
timezone = 'Asia/Shanghai'
beat_schedule = {
    "day_upload_req":{
        "task":"app.tasks.task_base.day_upload_req",
        "schedule":crontab(hour=0,minute=2),
    }

}
broker_url = 'redis://{host}:6379/1'.format(**REDIS_CONFIG)