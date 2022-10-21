import logging
from functools import wraps

from flask import request, g
from app import db
from app.models.user import User

log = logging.getLogger(__name__)


def auth_user(func):
    """
        用户认证  不做权限过滤
    :param func
    :return
    """

    @wraps(func)
    def inner(*args, **kwargs):
        token = request.headers.get('Token')
        g.user = None
        if token:
            user = db.session.query(User).filter(User.token == token).one_or_none()
            if user:
                g.user = user
        return func(*args, **kwargs)

    return inner


def auth_cookie(func):
    """
    cookie 用户认证
    :param func
    :return inner
    """

    @wraps(func)
    def inner(*args, **kwargs):
        token = request.cookies.get('token')
        g.user = None
        if token:
            user = db.session.query(User).filter(User.token == token).one_or_none()
            if user:
                g.user = user
        return func(*args, **kwargs)

    return inner
