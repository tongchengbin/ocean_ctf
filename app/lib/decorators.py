from functools import wraps

from flask import request, g

from config.config import WHITE_URL_LIST
from app.models.admin import Admin
from app.models.base import db
from app.lib.exceptions import APIForbidden


def login_required(func):
    """
        管理员权限认证
    :param func:
    :return:
    """

    @wraps(func)
    def inner(*args, **kwargs):
        authorization = request.headers.environ.get('HTTP_AUTHORIZATION')
        if not authorization:
            raise APIForbidden()
        admin = db.session.query(Admin).filter(Admin.token == authorization).one_or_none()
        if admin:
            g.user = admin
            return func(*args, **kwargs)
        else:
            raise APIForbidden()
    return inner


def check_permission(func):
    @wraps(func)
    def inner(*args,**kwargs):
        user = g.user
        # 如果没有用户 不校验权限
        method = request.method
        full_path = request.path
        if user and user.role_id == 4 and method not in ('OPTIONS', 'GET') and full_path not in WHITE_URL_LIST:
            raise APIForbidden(msg="访客无权操作",code=4003)
        return func(*args,**kwargs)

    return inner
