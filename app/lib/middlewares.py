"""
中间件
"""
import logging
from datetime import datetime
from flask import request, g, make_response, jsonify

from app.lib.api import api_fail
from app.models.admin import Admin
from app.extensions import db, cache

logger = logging.getLogger(__name__)


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


WHITE_PATH_LIST = ("/api/admin/login",)


def global_admin_required():
    """
        admin 请求拦截器  不需要针对每个接口使用装饰器
    """
    if request.method == "OPTIONS":
        return
    if request.path in WHITE_PATH_LIST:
        return
    if request.path.startswith("/api/admin"):
        # 检查管理员权限
        authorization = request.environ.get("HTTP_AUTHORIZATION")
        if not authorization:
            return api_fail(msg="Forbidden", code=401)
        admin = db.session.query(Admin).filter(Admin.token == authorization).first()
        if admin:
            g.user = admin
            # 检查用户权限
            if request.method in ["POST", "PUT", "PATCH", "DELETE"] and admin.role_name == "访客":
                return api_fail(msg="访客无权操作", code=403)
        else:
            return api_fail(msg="Forbidden", code=401)
