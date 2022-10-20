from datetime import datetime

from sqlalchemy import Column, String, DateTime, Boolean, JSON, Integer, ForeignKey, Text

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


class DockerResource(MainBase):
    """
        docker 镜像资源 包括远程镜像 tar包 和 docker file
    """

    DOCKER_TYPE_REMOTE_IMAGE = 1  # 远程docker 仓库 PULL 方式
    DOCKER_TYPE_MAP = {
        DOCKER_TYPE_REMOTE_IMAGE: "远程镜像加载"
    }
    STATUS_INIT = 0
    STATUS_BUILD = 1
    STATUS_MAP = {
        STATUS_INIT: "初始化",
        STATUS_BUILD: "已就绪"
    }
    status = Column(Integer, default=STATUS_INIT, comment="资源状态")
    resource_type = Column(String(12), comment="资源类型(CTF|VUL)")
    docker_type = Column(Integer, default=DOCKER_TYPE_REMOTE_IMAGE, comment="资源类型")
    name = Column(String(256), unique=True, comment="资源名称")
    image = Column(String(256), unique=True, comment="镜像名称:tag")
    ports = Column(String(256), comment="开放端口")
    description = Column(Text, comment="描述信息")

    @property
    def docker_type_name(self):
        return self.DOCKER_TYPE_MAP[self.docker_type]

    @property
    def status_name(self):
        return self.STATUS_MAP[self.status]


class DockerRunner(MainBase):
    __tablename__ = "docker_runner"
    TYPE_USER = 1
    TYPE_ADMIN = 2
    name = Column(String(256), unique=True, comment="名称")
    resource_id = Column(Integer, ForeignKey(DockerResource.id), comment="漏洞环境")
    resource = relationship(DockerResource)
    type = Column(db.Integer, default=1)
    user_id = Column(db.Integer, ForeignKey(User.id), comment="启动用户")
    user = relationship(User)
    create_time = Column(db.DateTime, nullable=False, default=datetime.utcnow)
    update_time = Column(db.DateTime, nullable=False, default=datetime.utcnow, onupdate=datetime.utcnow)
    port_info = Column(db.JSON, comment="服务端口信息")
    container_id = Column(String(255), comment="实际容器ID")
