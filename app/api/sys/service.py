from flask import g, request

from app import db
from app.models.admin import Operator


def insert_operator(code, content,username=None,role_name=None):
    """
        插入操作日志
        @:param code 是否成功
        @:param content 操作内容
    :return:
    """
    if username is None:
        user = g.user
        username = user.username
    if role_name is None:
        user = g.user
        role_name = user.role_name
    ip = request.remote_addr
    db.session.add(Operator(code=code, content=content, username=username, role=role_name,ip=ip))
    db.session.commit()
