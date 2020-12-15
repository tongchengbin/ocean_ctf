import sys
from celery import Celery
from data.database import DEFAULT_DATABASE
from lib.app_factory import app as flask_app
db = DEFAULT_DATABASE.db
# flask_app = create_app(app_name='celery')
# 这里时二级目录引入 所以需要添加跟目录到项目包 不然会找不到app
sys.path.append(sys.path[0])
app = Celery('ocean')
app.autodiscover_tasks(['app'])
app.config_from_object('config.config')
