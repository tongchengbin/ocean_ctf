import os
import logging.config
from dotenv import load_dotenv

BASE_DIR = os.path.dirname(os.path.abspath(os.path.dirname(__file__)))

load_dotenv(verbose=True)

DEBUG = True
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
DATABASE_CONNECT_OPTIONS = {}
SQLALCHEMY_TRACK_MODIFICATIONS = False
SQLALCHEMY_DATABASE_URI = "mysql+mysqldb://{db_user}:{db_password}@{db_host}:{db_port}/{db_name}".format(
    db_user=DB_USER,
    db_password=DB_PASSWORD,
    db_host=DB_HOST,
    db_port=DB_PORT,
    db_name=DB_NAME)
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
                '%(asctime)s - %(levelname)5s %(name)10.10s %(message)s',
        },
    },
    'handlers': {
        'console': {
            'class': 'logging.StreamHandler',
            'formatter': 'full',
            'level': logging.DEBUG,
            'stream': 'ext://sys.stdout',
        },
        'console_mini': {
            'class': 'logging.StreamHandler',
            'formatter': 'minimalistic',
            'level': logging.NOTSET,
            'stream': 'ext://sys.stdout',
        },
        'app_file': {
            'class': 'logging.handlers.RotatingFileHandler',
            'formatter': 'full',
            'filename': os.path.join(BASE_DIR, 'logs', 'app.log'),
            'maxBytes': 100000,
            'backupCount': 1,
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
        'app': {
            'handlers': ['console']
        },
        'werkzeug': {
            'handlers': ['console_mini'],
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
