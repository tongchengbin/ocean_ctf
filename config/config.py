# 配置文件
import logging.handlers
import os

from celery.schedules import crontab

BASE_DIR = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))
DEBUG = False

# db
DB_HOST = ''
DB_USER = ''
DB_PASSWORD = ''
DB_PORT = '3306'
DB_NAME = 'ocean'
# end db

# cache
REDIS_URL = 'redis://:@159.75.92.142:6379'
# end cache

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

THREADS_PER_PAGE = 2
SQLALCHEMY_ECHO = False
DATABASE_CONNECT_OPTIONS = {}
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = "mysql+mysqldb://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}".format(
    db_user=DB_USER,
    db_password=DB_PASSWORD,
    db_host=DB_HOST,
    db_port=DB_PORT,
    db_name=DB_NAME)

#  定时任务
timezone = 'Asia/Shanghai'

BROKER_URL = "{}/1".format(REDIS_URL)

UPLOAD_DIR = 'upload'

WHITE_URL_LIST = ('/api/admin/login', '/api/admin/logout')
