from datetime import datetime, timedelta

from celery_worker import app, flask_app
from data.database import DEFAULT_DATABASE as db
from data.models.admin import RequestState
from lib.cache import cache, ConstCacheKey


@app.task
def day_upload_req():
    """

        定时任务 每天执行一次    将redis内的数据写入db
    """
    with flask_app.app_context():
        day = (datetime.today() - timedelta(days=1)).strftime("%Y%m%d")
        ip_count = cache.scard(ConstCacheKey.IP_DAY_SET % day)
        req_count = int(cache.get(ConstCacheKey.REQ_DAY_COUNT % day) or 0)
        instance = RequestState(day=day, ip_count=ip_count, req_count=req_count)
        db.session.add(instance)
        db.session.commit()
