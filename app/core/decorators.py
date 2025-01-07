import logging
from functools import wraps

from flask import request, g

from app.extensions import db
from app.core.api import api_fail
from app.models.user import User

logger = logging.getLogger('app')


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
                    return api_fail(msg="权限验证失败!", code=401)
                else:
                    g.user = None
                    return fn(*args, **kwargs)
            user = db.session.query(User).filter(User.token == authorization).one_or_none()
            if user:
                g.user = user
                return fn(*args, **kwargs)
            else:
                return api_fail(msg="认证已过期、请重新登录!", code=401)

        return inner

    return decorator
