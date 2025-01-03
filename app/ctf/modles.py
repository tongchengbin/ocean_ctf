"""
    用户相关模型
"""
from enum import Enum

from sqlalchemy import Column
from sqlalchemy.orm import relationship, Mapped

from app.docker.models import DockerResource, DockerRunner
from app.extensions import db
from app.models import Model
from app.sys.models import User


class QType(Enum):
    web = "web"
    misc = "Misc"
    reverse = "Reverse"
    pwn = "Pwn"
    crypto = "Crypto"
    iot = "Iot"


class Attachment(Model):
    """
        附件表
    """
    __tablename__ = 'attachment'
    filename = Column(db.String(32), comment='文件名')
    file_path = Column(db.String(128), comment="文件相对路径")


class ImageResource(Model):
    __tablename__ = 'image_resource'
    """
        上传的镜像资源
    """
    STATUS_BUILDING = 'building'
    STATUS_ERROR = 'error'
    STATUS_SUCCESS = 'success'
    status = Column(db.String(8), default=STATUS_BUILDING, comment="状态")
    host_id = Column(db.Integer, db.ForeignKey('docker_host.id'))
    name = Column(db.String(32), comment="名称")
    version = Column(db.String(64), comment="版本")
    cpu = Column(db.Integer, comment="CPU个数")
    memory = Column(db.Integer, comment="内存大小M")
    file_id = Column(db.Integer, db.ForeignKey('attachment.id'), comment="文件名")
    file: Mapped[Attachment] = relationship("Attachment", )
    build_result = Column(db.String(4096), comment="镜像状态说明")


class Question(Model):
    __tablename__ = 'ctf_question'
    name = Column(db.String(256), nullable=False, comment='题目名称')
    type = Column(db.String(16), comment="分类")
    active = Column(db.Boolean(), default=True, comment="是否启用")
    score = Column(db.Integer, default=10, comment="积分")
    desc = Column(db.String(1024), default="", comment="描述")
    flag = Column(db.String(64), comment="Flag", nullable=True)
    active_flag = Column(db.Boolean(), default=False, comment="是否时动态Flag")
    attachment = Column(db.String(64), comment="附件", nullable=True)
    resource_id = Column(db.Integer, db.ForeignKey('docker_resource.id'), comment="关联compose",
                         nullable=True)
    resource = relationship(DockerResource)


class CtfResource(Model):
    __tablename__ = 'ctf_resource'
    """
        实际的容器资源 不一定是实际的主机容器  主要是用来记录用户对容器的使用 同时绑定Flag
    """

    docker_runner_id = Column(db.ForeignKey("docker_runner.id", ondelete='cascade'),
                              comment="compose ID")
    docker_runner = relationship(DockerRunner)
    flag = Column(db.String(64), nullable=True, comment="环境flag")
    user_id = Column(db.Integer, db.ForeignKey('user.id'), comment="关联用户")
    user = relationship(User, backref='container_ref')
    destroy_time = Column(db.DateTime, comment="销毁时间")
    question_id = Column(db.ForeignKey("ctf_question.id"), comment="对应的题库")
    question = relationship(Question, backref='container_ref')


class Answer(Model):
    """
        答题记录表
    """
    status_ok = 1  # 有效
    status_error = 2  # "无效"
    status_cheat = 3  # "作弊"
    status_repeat = 4  # "有效不计分"

    status_choices = (
        (status_ok, "有效"),
        (status_error, "无效"),
        (status_cheat, "作弊"),
        (status_repeat, "有效不计分")
    )
    __tablename__ = 'ctf_answer'
    status = Column(default=1, comment="状态")
    user_id = Column(db.ForeignKey('user.id', ondelete='CASCADE'), comment="关联用户")
    question_id = Column(db.ForeignKey('ctf_question.id'), comment="对应题目")
    rank = Column(db.Integer, comment="解题名次", default=0)
    flag = Column(db.String(64), comment="提交内容")
    score = Column(db.Integer(), default=0, comment="分数")
    ip = Column(db.String(64), comment="提交答案IP")

    @property
    def status_name(self):
        return dict(self.status_choices).get(self.status)
