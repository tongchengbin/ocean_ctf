from sqlalchemy import Column, ForeignKey
from sqlalchemy.orm import relationship

from app.database import MainBase
from app.extensions import db


class Role(MainBase):
    __tablename__ = 's_role'
    """
        角色  后面会关联权限
    """
    name = Column(db.String(256), nullable=False, unique=True)


class Admin(MainBase):
    __tablename__ = 's_admin'
    username = Column(db.String(256), unique=True, nullable=False, comment='用户名')
    password = Column(db.String(512), nullable=False, comment='密码')
    role_id = Column(db.Integer, ForeignKey('s_role.id'))
    role = relationship('Role')
    active = Column(db.Boolean(), comment="是否启用")
    login_time = Column(db.DateTime, default=None)
    token = Column(db.String(64), comment="token", nullable=True, unique=True)
    task_list = relationship('TaskList', backref='admin')

    @property
    def role_name(self):
        return self.role.name if self.role else ''


class TaskList(MainBase):
    STATUS_WAIT = 1  # 排队
    STATUS_CANCEL = 2  # 取消
    STATUS_RUN = 3  # 执行中
    STATUS_ERROR = 4  # 执行错误
    STATUS_DONE = 5  # 执行完成
    STATUS_CHOICES = ((STATUS_WAIT, "排队"),
                      (STATUS_CANCEL, "取消"),
                      (STATUS_RUN, "执行中"),
                      (STATUS_ERROR, "执行错误"),
                      (STATUS_DONE, "执行完成"))
    admin_id = Column(db.Integer, ForeignKey('s_admin.id'), comment="操作用户")
    status = Column(db.Integer, default=STATUS_WAIT, comment="任务状况")
    title = Column(db.String(64), comment="任务标题")
    target_id = Column(db.String(32), comment="操作对象ID 可以是主机 容器 镜像 题库等")
    remark = Column(db.Text, comment="备注 报错错误信息记录")

    @property
    def status_name(self):
        return dict(self.STATUS_CHOICES)[self.status]


class TaskLog(MainBase):
    task_id = Column(db.Integer, ForeignKey('task_list.id'))
    content = Column(db.String(1024), comment="内容")


class RequestState(MainBase):
    """
        每日请求统计
    """
    ip_count = Column(db.Integer)
    req_count = Column(db.Integer)
    day = Column(db.Date, comment="日期")


class Notice(MainBase):
    __tablename__ = 'notice'
    active = Column(db.Boolean(), default=True)
    is_top = Column(db.Boolean(), default=False)
    content = Column(db.String(1024), comment="内容")


class Operator(MainBase):
    """
        行为审计日志
    """
    username = Column(db.String(255), comment="操作人用户名")
    code = Column(db.Boolean, default=True, comment="操作结果")
    ip = Column(db.String(15), comment="操作IP")
    content = Column(db.String(128), comment="操作内容")
    role = Column(db.String(10), comment="操作人角色")


class Config(MainBase):
    KEY_IP = "ip"
    KEY_DOCKER_API = "docker_api"
    KEY_PORT_RANGE = "port_range"
    KEY_CTF_TIMEOUT = "ctf_timeout"
    CONFIG_MAP = {
        KEY_IP: (str, "127.0.0.1"),
        KEY_DOCKER_API: (str, "unix:///var/run/docker.sock"),
        KEY_PORT_RANGE: (str, "40000-50000"),
        KEY_CTF_TIMEOUT: (int, 180)
    }

    key = Column(db.String(255), comment="键")
    val = Column(db.String(255), comment="值")
    type = Column(db.String(32), comment="数据类型")

    @staticmethod
    def get_config(key):
        if key not in Config.CONFIG_MAP:
            raise ValueError("该KEY值不是合法的配置键")
        val_type = Config.CONFIG_MAP[key][0]
        val_default = Config.CONFIG_MAP[key][1]
        config_item = db.session.query(Config).filter(Config.key == key).first()
        if config_item:
            config_val = config_item.val
            return val_type(config_val)
        else:
            return val_default
