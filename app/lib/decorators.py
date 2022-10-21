import logging
from functools import wraps
from flask import request, g

from app.lib.exceptions import APIForbidden
from app.lib.rest_response import fail, Code
from app.models.admin import Admin
from app.models.base import db
from app.models.user import User

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
                    raise APIForbidden(status=200)
                else:
                    g.user = None
                    return fn(*args, **kwargs)
            admin = db.session.query(User).filter(User.token == authorization).one_or_none()
            if admin:
                g.user = admin
                return fn(*args, **kwargs)
            else:
                raise APIForbidden(status=200)

        return inner

    return decorator


def check_user_permission(func):
    @wraps(func)
    def inner(*args, **kwargs):
        if hasattr(g, 'user') and getattr(g, 'user'):
            return func(*args, **kwargs)
        else:
            return fail(code=Code.AUTH_ERROR, msg="身份认证失败")

    return inner
