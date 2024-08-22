import datetime

from sqlalchemy import ForeignKey
from sqlalchemy.orm import relationship, Mapped, mapped_column

from . import Model
from . import db


class Role(Model):
    __tablename__ = 's_role'
    """
        角色  后面会关联权限
    """
    id: Mapped[int] = mapped_column(primary_key=True)
    name: Mapped[str] = mapped_column(db.String(256), nullable=False, unique=True)


class Admin(Model):
    __tablename__ = 's_admin'
    username: Mapped[str] = mapped_column(db.String(256), unique=True, nullable=False, comment='用户名')
    password: Mapped[str] = mapped_column(db.String(512), nullable=False, comment='密码')
    role_id: Mapped[int] = mapped_column(db.Integer, ForeignKey('s_role.id'))
    role: Mapped['Role'] = relationship('Role')
    active: Mapped[bool] = mapped_column(db.Boolean(), comment="是否启用", default=True)
    login_time: Mapped[datetime.datetime] = mapped_column(db.DateTime, default=None, nullable=True)
    token: Mapped[str] = mapped_column(db.String(64), comment="token", nullable=True, unique=True)
    task_list: Mapped['TaskList'] = relationship('TaskList', backref='admin')

    @property
    def role_name(self):
        return self.role.name if self.role else ''


class TaskList(Model):
    __tablename__ = 'task_list'
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
    admin_id = mapped_column(db.Integer, ForeignKey('s_admin.id'), comment="操作用户")
    status = mapped_column(db.Integer, default=STATUS_WAIT, comment="任务状况")
    title = mapped_column(db.String(64), comment="任务标题")
    target_id = mapped_column(db.String(32), comment="操作对象ID 可以是主机 容器 镜像 题库等")
    remark = mapped_column(db.Text, comment="备注 报错错误信息记录")

    @property
    def status_name(self):
        return dict(self.STATUS_CHOICES)[self.status]


class TaskLog(Model):
    __tablename__ = 'task_log'
    task_id = mapped_column(db.Integer, ForeignKey('task_list.id'))
    content = mapped_column(db.String(1024), comment="内容")


class RequestState(Model):
    """
        每日请求统计
    """
    __tablename__ = 'request_state'
    ip_count: Mapped[int] = mapped_column(db.Integer)
    req_count: Mapped[int] = mapped_column(db.Integer)
    day: Mapped[datetime.date] = mapped_column(db.Date, comment="日期")


class Notice(Model):
    __tablename__ = 'notice'
    active: Mapped[bool] = mapped_column(db.Boolean(), default=True)
    is_top: Mapped[bool] = mapped_column(db.Boolean(), default=False)
    content: Mapped[str] = mapped_column(db.String(1024), comment="内容")


class Operator(Model):
    """
        行为审计日志
    """
    __tablename__ = 'operator'
    username: Mapped[str] = mapped_column(db.String(255), comment="操作人用户名")
    code: Mapped[bool] = mapped_column(db.Boolean(), default=True, comment="操作结果")
    ip: Mapped[str] = mapped_column(db.String(15), comment="操作IP")
    content: Mapped[str] = mapped_column(db.String(128), comment="操作内容")
    role: Mapped[str] = mapped_column(db.String(10), comment="操作人角色", nullable=True)


class Config(Model):
    KEY_IP = "ip"
    KEY_DOCKER_API = "docker_api"
    KEY_PORT_RANGE = "port_range"
    KEY_CTF_TIMEOUT = "ctf_timeout"
    KEY_VULNERABILITY_TIMEOUT = "vulnerability_timeout"
    KEY_REMOTE_VULNERABILITY_REPOSITORY = "remote_vulnerability_repository"
    KEY_CTF_REPOSITORY = "ctf_repository"
    CONFIG_MAP = {
        KEY_IP: (str, "127.0.0.1"),
        KEY_DOCKER_API: (str, "unix:///var/run/docker.sock"),
        KEY_PORT_RANGE: (str, "40000-50000"),
        KEY_CTF_TIMEOUT: (int, 180),
        KEY_VULNERABILITY_TIMEOUT: (int, 1800),
        KEY_REMOTE_VULNERABILITY_REPOSITORY: (str, "https://github.com/tongchengbin/vuldb.git"),
        KEY_CTF_REPOSITORY: (str, "https://github.com/tongchengbin/ctfdb.git")
    }

    __tablename__ = 'config'
    key: Mapped[str] = mapped_column(db.String(255), comment="键")
    val: Mapped[str] = mapped_column(db.String(255), comment="值")
    type: Mapped[str] = mapped_column(db.String(32), comment="数据类型")

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


class MessageType:
    TYPE_ADMIN = 0
    TYPE_DOCKER = 1


class MessageLevel:
    INFO = 0
    WARN = 1
    ERROR = 2


class AdminMessage(Model):
    """
        管理员消息
    """
    __tablename__ = 'admin_message'
    mtype: Mapped[int] = mapped_column(db.Integer, comment="消息类型", default=MessageType.TYPE_ADMIN)
    admin_id: Mapped[int] = mapped_column(db.Integer, ForeignKey('s_admin.id'), comment="关联管理员")
    content: Mapped[str] = mapped_column(db.String(1024))
    read: Mapped[bool] = mapped_column(db.Boolean(), default=False, comment="是否已读")
    level: Mapped[int] = mapped_column(db.Integer, comment="重要级别")
