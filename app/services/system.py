from flask import g, request

from app.extensions import db
from app.models.admin import AdminMessage, Config, MessageLevel, MessageType, Operator


def create_admin_message(admin_id, content, level=MessageLevel.ERROR):
    db.session.add(
        AdminMessage(admin_id=admin_id, content=content, mtype=MessageType.TYPE_ADMIN, level=level)
    )
    db.session.commit()


def insert_operator(code, content, username=None, role_name=None):
    """
        插入操作日志
        @:param code 是否成功
        @:param content 操作内容
    :return:
    """
    if username is None:
        user = g.user
        username = user.username
    ip = request.remote_addr
    db.session.add(Operator(code=code, content=content, username=username, role=role_name, ip=ip))
    db.session.commit()


def get_config_val(key):
    if key not in Config.CONFIG_MAP:
        raise ValueError("该KEY值不是合法的配置键")
    val_type = Config.CONFIG_MAP[key][0]
    val_default = Config.CONFIG_MAP[key][1]
    config_item = db.session.query(Config).filter(Config.key == key).first()
    if config_item:
        config_val = config_item.val
        if val_type == "int":
            return int(config_val)
    else:
        return val_default
