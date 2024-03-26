import os
import logging.config
from dotenv import load_dotenv
from celery.schedules import crontab

BASE_DIR = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))

load_dotenv(verbose=True)

DEBUG = False
# db
DB_HOST = os.getenv('DB_HOST')
DB_USER = os.getenv('DB_USER')
DB_PASSWORD = os.getenv('DB_PASSWORD')
DB_PORT = os.getenv('DB_PORT')
DB_NAME = 'ocean'
# end db

# cache
REDIS_HOST = os.getenv("REDIS_HOST")
REDIS_PASSWORD = os.getenv("REDIS_PASSWORD")
# end cache

# 跨域配置
CSRF_ENABLED = True
CSRF_SESSION_KEY = os.getenv("CSRF_SESSION_KEY", "")

THREADS_PER_PAGE = 2
SQLALCHEMY_ECHO = False
SQLALCHEMY_POOL_RECYCLE = 5
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = "mysql+mysqldb://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}".format(
    db_user=DB_USER,
    db_password=DB_PASSWORD,
    db_host=DB_HOST,
    db_port=DB_PORT,
    db_name=DB_NAME)
SQLALCHEMY_ENGINE_OPTIONS = {
    'pool_recycle': 3600
}

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'basic': {
            'format': '%(levelname)-4.4s [%(name)s] %(message)s',
        }
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'basic',
            'level': logging.INFO,
            'stream': 'ext://sys.stdout',
        },
        'none': {
            'class': 'logging.StreamHandler',
            'formatter': 'basic',
            'level': logging.NOTSET,
            'stream': 'ext://sys.stdout',
        }
    },

    'loggers': {
        '': {
            'propagate': False,
            'level': 'INFO',
            'handlers': ['console'],
        },
        'app': {
            'propagate': False,
            'handlers': ['console']
        },
        'werkzeug': {
            'handlers': ['none'],
            'propagate': False,
        }
    }
}
#  定时任务
REDIS_URL = 'redis://:{REDIS_PASSWORD}@{REDIS_HOST}:6379'.format(REDIS_HOST=REDIS_HOST,
                                                                 REDIS_PASSWORD=REDIS_PASSWORD)
UPLOAD_DIR = os.path.join(BASE_DIR, 'upload')

enable_utc = False

logging.config.dictConfig(LOGGING)

# 应用初始化 db 和 redis 初始化有延迟
API_INIT = False

# celery
broker_url = REDIS_URL

beat_schedule = {
    "day_upload_req": {
        "task": "app.sys.tasks.day_upload_req",
        "schedule": crontab(hour="2", minute="4"),
    },
    "beat_destroy_container": {
        "task": "app.ctf.tasks.beat_destroy_container",
        "schedule": crontab(minute="*"),

    },
    # "crontab_monitoring_docker_api": {
    #     "task": "app.tasks.ctf.crontab_monitoring_docker_api",
    #     "schedule": crontab(minute="*/1")
    # }

}
