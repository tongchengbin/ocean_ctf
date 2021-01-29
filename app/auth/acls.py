import logging
from functools import wraps

from flask import request, g, jsonify, make_response

from app.exceptions import APIForbidden
from data.database import DEFAULT_DATABASE as db
from data.models import User
from data.models.admin import Admin

log = logging.getLogger(__name__)


def admin_required(func):
    """
        管理员权限认证
    :param func:
    :return:
    """

    @wraps(func)
    def inner(*args, **kwargs):
        authorization = request.headers.environ.get('HTTP_AUTHORIZATION')
        if not authorization:
            g.user = None
            return func(*args, **kwargs)
        admin = db.session.query(Admin).filter(Admin.token == authorization).one_or_none()
        if admin:
            g.user = admin
            return func(*args, **kwargs)
        else:
            return APIForbidden(response=make_response(jsonify({"error": "Forbidden", "code": 403}), 403))

    return inner


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
