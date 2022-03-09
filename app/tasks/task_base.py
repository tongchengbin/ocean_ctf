from __future__ import absolute_import

import logging
from datetime import datetime, timedelta

from app import db, scheduler
from app.models.admin import RequestState
from app.lib.cache import cache, ConstCacheKey
logger = logging.getLogger('app')


@scheduler.task("cron", day="*",hour="0")
def day_upload_req():
    """

        定时任务 每天执行一次    将redis内的数据写入db
    """
    logger.info("start upload requests data")
    day = (datetime.today() - timedelta(days=1)).strftime("%Y%m%d")
    ip_count = cache.scard(ConstCacheKey.IP_DAY_SET % day)
    req_count = int(cache.get(ConstCacheKey.REQ_DAY_COUNT % day) or 0)
    instance = RequestState(day=day, ip_count=ip_count, req_count=req_count)
    db.session.add(instance)
    db.session.commit()


