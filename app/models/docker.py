from datetime import datetime

from sqlalchemy import Column, UniqueConstraint
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
    name: Mapped[str] = mapped_column(db.String(256), unique=True, comment="名称")
    compose_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey("compose_db.id"), comment="漏洞环境")
    compose: Mapped[ComposeDB] = relationship(ComposeDB)
    type: Mapped[int] = mapped_column(db.Integer, default=1)
    user_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey("user.id"), comment="启动用户")
    user: Mapped[User] = relationship(User)
    create_time: Mapped[datetime] = mapped_column(db.DateTime, nullable=False, default=datetime.now)
    update_time: Mapped[datetime] = mapped_column(db.DateTime, nullable=False, default=datetime.now,
                                                  onupdate=datetime.now)
    port_info: Mapped[dict] = mapped_column(db.JSON, comment="服务端口信息")
    project_dir: Mapped[str] = mapped_column(db.String(256), comment="项目目录")
    flag: Mapped[str] = mapped_column(db.String(64), comment="flag")


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
    STATUS_BUILD_ERROR = 2
    STATUS_MAP = {
        STATUS_INIT: "初始化",
        STATUS_BUILD: "已就绪",
        STATUS_BUILD_ERROR: "构建失败"
    }
    status: Mapped[int] = mapped_column(db.Integer, default=STATUS_INIT, comment="资源状态")
    resource_type: Mapped[str] = mapped_column(db.String(12), comment="资源类型(CTF|VUL)")
    docker_type: Mapped[int] = mapped_column(db.Integer, default=DOCKER_TYPE_REMOTE_IMAGE, comment="资源类型")
    name: Mapped[str] = mapped_column(db.String(256), comment="资源名称")
    image = mapped_column(db.String(256), comment="镜像名称:tag")
    dockerfile = mapped_column(db.Text, comment="Dockerfile", nullable=True)
    ports: Mapped[str] = mapped_column(db.String(256), comment="开放端口", nullable=True)
    description: Mapped[str] = mapped_column(db.Text, comment="描述信息")
    cve: Mapped[str] = mapped_column(db.JSON, comment="关联CVE", nullable=True)
    app: Mapped[str] = mapped_column(db.String(128), comment="相关组件", nullable=True)

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
    name: Mapped[str] = mapped_column(db.String(256), unique=True, comment="名称")
    resource_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey("docker_resource.id"), comment="漏洞环境")
    resource: Mapped[DockerResource] = relationship(DockerResource)
    type: Mapped[int] = mapped_column(db.Integer, default=1)
    user_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey("user.id", ondelete='CASCADE'), comment="启动用户",
                                         nullable=True)
    admin_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey("admin.id", ondelete='CASCADE'),
                                          comment="启动用户",
                                          nullable=True)
    user: Mapped[User] = relationship(User)
    admin: Mapped[Admin] = relationship(Admin)
    create_time: Mapped[datetime] = mapped_column(db.DateTime, nullable=False, default=datetime.now)
    update_time: Mapped[datetime] = mapped_column(db.DateTime, nullable=False, default=datetime.now,
                                                  onupdate=datetime.now)
    port_info: Mapped[dict] = mapped_column(db.JSON, comment="服务端口信息")
    container_id: Mapped[str] = mapped_column(db.String(255), comment="实际容器ID")
