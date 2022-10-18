import logging
from functools import wraps

import typing
from flask import request, g

from app.lib.exceptions import APIForbidden
from app.lib.rest_response import fail, Code
from app.models.admin import Admin
from app.models.base import db
from app.models.user import User
from config.config import WHITE_URL_LIST

logger = logging.getLogger('app')


def login_required(required=True):
    """
        管理员权限认证
    :return:
    """

    def decorator(fn):
        @wraps(fn)
        def inner(*args, **kwargs):
            authorization = request.headers.get("Authorization")
            if not authorization:
                if required:
                    raise APIForbidden()
                else:
                    g.user = None
                    return fn(*args, **kwargs)
            admin = db.session.query(Admin).filter(Admin.token == authorization).one_or_none()
            if admin:
                g.user = admin
                return fn(*args, **kwargs)
            else:
                raise APIForbidden()

        return inner

    return decorator


def user_required(required=True):
    """
        管理员权限认证
    :return:
    """

    def decorator(fn):
        @wraps(fn)
        def inner(*args, **kwargs):
            authorization = request.headers.get("Authorization")
            if not authorization:
                if required:
                    raise APIForbidden()
                else:
                    g.user = None
                    return fn(*args, **kwargs)
            admin = db.session.query(User).filter(User.token == authorization).one_or_none()
            if admin:
                g.user = admin
                return fn(*args, **kwargs)
            else:
                raise APIForbidden()

        return inner

    return decorator


def check_permission(func):
    @wraps(func)
    def inner(*args, **kwargs):
        user = g.user
        # 如果没有用户 不校验权限
        method = request.method
        full_path = request.path
        if user and user.role_id == 4 and method not in ('OPTIONS', 'GET') and full_path not in WHITE_URL_LIST:
            raise APIForbidden(msg="访客无权操作", code=4003)
        return func(*args, **kwargs)

    return inner


def check_user_permission(func):
    @wraps(func)
    def inner(*args, **kwargs):
        if hasattr(g, 'user') and getattr(g, 'user'):
            return func(*args, **kwargs)
        else:
            return fail(code=Code.AUTH_ERROR, msg="身份认证失败")

    return inner
