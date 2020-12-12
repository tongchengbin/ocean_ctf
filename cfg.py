# 配置文件
import logging.handlers
import os

BASE_DIR = os.path.abspath(os.path.dirname(__file__))
DEBUG = False

ENV = 'DEV'
if ENV == 'DEV':
    SECRET_KEY = "#dsf!9dd0sfn7sd4fa5s-sdf"
    DEBUG = False
    MYSQL_USER = os.getenv("MYSQL_USER")
    MYSQL_PASS = os.getenv("MYSQL_PASS")
else:
    SECRET_KEY = "#dsf!9dd0sfn7sd4fa5s-sdf"
    DEBUG = False
    MYSQL_USER = os.getenv("MYSQL_USER")
    MYSQL_PASS = os.getenv("MYSQL_PASS")

MYSQL_CONNECTION_NAME = 'ocean'


def gen_connection_string():
    # 获取数据库连接地址 传递给sql db
    use_name = 'root'
    use_pass = '123456'
    use_host = "127.0.0.1"
    use_port = 3306

    return (f"mysql+mysqldb://{use_name}:{use_pass}@{use_host}:{use_port}"
            "/ocean")


SQLALCHEMY_DATABASE_URI = gen_connection_string()

SQLALCHEMY_ECHO = False
DATABASE_CONNECT_OPTIONS = {}
SQLALCHEMY_TRACK_MODIFICATIONS = False

THREADS_PER_PAGE = 2

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
            'filename': os.path.join(BASE_DIR, 'info.log'),
            'maxBytes': 100000,
            'backupCount': 1,
        },
        'error_file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'full',
            'filename': os.path.join(BASE_DIR, 'error.log'),
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
BROKER_URL = 'redis://127.0.0.1:6379/1'
REDIS_CONFIG = {
    "host":'127.0.0.1',
    'password':""
}


try:
    from local_cfg import *
except ImportError:
    pass

