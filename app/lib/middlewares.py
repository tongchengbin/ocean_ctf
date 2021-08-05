"""
中间件
"""
from datetime import datetime

from flask import request

from .cache import cache


def before_req_cache_ip():
    """
        缓存IP
    """
    if request.access_route:
        ip = request.access_route[0]
    else:
        ip = request.remote_addr or '127.0.0.1'
    today = datetime.today().strftime("%Y%m%d")
    cache.sadd('ip-%s' % today, ip)
    cache.incr("req-%s" % today)
