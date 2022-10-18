from datetime import datetime

from sqlalchemy import Column, String, DateTime, Boolean, JSON, Integer, ForeignKey

from app import db
from app.database import MainBase, relationship
from app.models.user import User


class Host(MainBase):
    __tablename__ = 'docker_host'
    name = Column(String(256), unique=True, nullable=False, comment='用户名')
    ip = Column(String(256), unique=True, nullable=False, comment="外部访问连接")
    docker_api = Column(String(256), nullable=False, comment="地址")
    remark = Column(String(256), comment="备注", nullable=True)
    online_time = Column(DateTime, comment="最后一次在线时间")
    active = Column(Boolean(), default=True, comment="是否启用")
    system = Column(JSON(), comment="详情信息")


class ComposeDB(MainBase):
    """
        compose 数据库  用来存储管理本地数据映射
    """

    __tablename__ = 'compose_db'
    STATUS_CREATE = 0
    STATUS_BUILD = 1
    STATUS_FAILED = 2
    status = Column(Integer, default=0, comment="状态")
    name = Column(String(256), unique=True, nullable=False, comment='环境名')
    path = Column(String(256), unique=True, nullable=False, comment='目录地址')


class ComposeRunner(MainBase):
    """
        启动compose后的管理状态
    """
    __tablename__ = "compose_runner"
    TYPE_USER = 1
    TYPE_ADMIN = 2
    name = Column(String(256), unique=True, comment="名称")
    compose_id = Column(Integer, ForeignKey(ComposeDB.id), comment="漏洞环境")
    compose = relationship(ComposeDB)
    type = Column(db.Integer, default=1)
    user_id = Column(db.Integer, ForeignKey(User.id), comment="启动用户")
    user = relationship(User)
    create_time = Column(db.DateTime, nullable=False, default=datetime.utcnow)
    update_time = Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    port_info = Column(db.JSON, comment="服务端口信息")
    project_dir = Column(db.String(256), comment="项目目录")
    flag = Column(String(64), comment="flag")
