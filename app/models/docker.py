from datetime import datetime

from sqlalchemy import Column, ForeignKey, UniqueConstraint, JSON, String, Integer
from sqlalchemy.orm import Mapped, mapped_column

from app.models import Model, relationship
from app.models.admin import Admin
from app.models.user import User
from . import db


class Host(Model):
    __tablename__ = 'docker_host'
    name = Column(db.String(256), unique=True, nullable=False, comment='用户名')
    ip = Column(db.String(256), unique=True, nullable=False, comment="外部访问连接")
    docker_api = Column(db.String(256), nullable=False, comment="地址")
    remark = Column(db.String(256), comment="备注", nullable=True)
    online_time = Column(db.DateTime, comment="最后一次在线时间")
    active = Column(db.Boolean(), default=True, comment="是否启用")
    system = Column(db.JSON(), comment="详情信息")


class ComposeDB(Model):
    """
        compose 数据库  用来存储管理本地数据映射
    """

    __tablename__ = 'compose_db'
    STATUS_CREATE = 0
    STATUS_BUILD = 1
    STATUS_FAILED = 2
    status = Column(db.Integer, default=0, comment="状态")
    name = Column(db.String(256), unique=True, nullable=False, comment='环境名')
    path = Column(db.String(256), unique=True, nullable=False, comment='目录地址')


class ComposeRunner(Model):
    """
        启动compose后的管理状态
    """
    __tablename__ = "compose_runner"
    TYPE_USER = 1
    TYPE_ADMIN = 2
    name = Column(db.String(256), unique=True, comment="名称")
    compose_id = Column(db.Integer, ForeignKey(ComposeDB.id), comment="漏洞环境")
    compose = relationship(ComposeDB)
    type = Column(db.Integer, default=1)
    user_id = Column(db.Integer, ForeignKey(User.id), comment="启动用户")
    user = relationship(User)
    create_time = Column(db.DateTime, nullable=False, default=datetime.utcnow)
    update_time = Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    port_info = Column(db.JSON, comment="服务端口信息")
    project_dir = Column(db.String(256), comment="项目目录")
    flag = Column(db.String(64), comment="flag")


class DockerResource(Model):
    """
        docker 镜像资源 包括远程镜像 tar包 和 docker file
    """

    __tablename__ = "docker_resource"
    DOCKER_TYPE_REMOTE_IMAGE = 1  # 远程docker 仓库 PULL 方式
    DOCKER_TYPE_LOCAL_IMAGE = 2
    DOCKER_TYPE_MAP = {
        DOCKER_TYPE_REMOTE_IMAGE: "远程镜像加载",
        DOCKER_TYPE_LOCAL_IMAGE: "本地镜像加载"
    }
    STATUS_INIT = 0
    STATUS_BUILD = 1
    STATUS_MAP = {
        STATUS_INIT: "初始化",
        STATUS_BUILD: "已就绪"
    }
    status: Mapped[int] = mapped_column(Integer, default=STATUS_INIT, comment="资源状态")
    resource_type: Mapped[str] = mapped_column(String(12), comment="资源类型(CTF|VUL)")
    docker_type: Mapped[int] = mapped_column(Integer, default=DOCKER_TYPE_REMOTE_IMAGE, comment="资源类型")
    name: Mapped[str] = mapped_column(String(256), comment="资源名称")
    image: Mapped[str] = mapped_column(String(256), comment="镜像名称:tag")
    dockerfile: Mapped[str] = mapped_column(db.Text, comment="Dockerfile")
    ports: Mapped[str] = mapped_column(String(256), comment="开放端口")
    description: Mapped[str] = mapped_column(db.Text, comment="描述信息")
    cve: Mapped[str] = mapped_column(JSON, comment="关联CVE")
    app: Mapped[str] = mapped_column(String(128), comment="相关组件")

    __table__args = (
        UniqueConstraint('name', 'docker_type', name='idx_name_docker_type'),
        UniqueConstraint('image', 'docker_type', name='idx_image_docker_type'),
    )

    @property
    def docker_type_name(self):
        return self.DOCKER_TYPE_MAP[self.docker_type]

    @property
    def status_name(self):
        return self.STATUS_MAP[self.status]


class DockerRunner(Model):
    __tablename__ = "docker_runner"
    TYPE_USER = 1
    TYPE_ADMIN = 2
    name = Column(db.String(256), unique=True, comment="名称")
    resource_id = Column(db.Integer, ForeignKey(DockerResource.id), comment="漏洞环境")
    resource = relationship(DockerResource)
    type = Column(db.Integer, default=1)
    user_id = Column(db.Integer, ForeignKey(User.id, ondelete='CASCADE'), comment="启动用户")
    admin_id = Column(db.Integer, ForeignKey(Admin.id, ondelete='CASCADE'), comment="启动用户")
    user = relationship(User)
    admin = relationship(Admin)
    create_time = Column(db.DateTime, nullable=False, default=datetime.utcnow)
    update_time = Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    port_info = Column(db.JSON, comment="服务端口信息")
    container_id = Column(db.String(255), comment="实际容器ID")
