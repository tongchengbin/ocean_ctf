from __future__ import absolute_import
from datetime import datetime, timedelta

from app import db
from app.models.admin import RequestState
from app.lib.cache import cache, ConstCacheKey
from app import celery_app


@celery_app.task
def day_upload_req():
    """

        定时任务 每天执行一次    将redis内的数据写入db
    """
    day = (datetime.today() - timedelta(days=1)).strftime("%Y%m%d")
    ip_count = cache.scard(ConstCacheKey.IP_DAY_SET % day)
    req_count = int(cache.get(ConstCacheKey.REQ_DAY_COUNT % day) or 0)
    instance = RequestState(day=day, ip_count=ip_count, req_count=req_count)
    db.session.add(instance)
    db.session.commit()


@celery_app.task
def celery_test():
    print("celery task success")