"""
    用户相关模型
"""
from enum import Enum

from sqlalchemy import Column, ForeignKey
from sqlalchemy.orm import relationship
from app.extensions import db
from app.database import MainBase, LogicBase
from app.models.docker import Host, DockerResource, DockerRunner
from app.models.user import User


class QType(Enum):
    web = "web"
    misc = "Misc"
    reverse = "Reverse"
    pwn = "Pwn"
    crypto = "Crypto"


class ImageResource(MainBase):
    __tablename__ = 'image_resource'
    """
        上传的镜像资源
    """
    STATUS_BUILDING = 'building'
    STATUS_ERROR = 'error'
    STATUS_SUCCESS = 'success'
    status = Column(db.String(8), default=STATUS_BUILDING, comment="状态")
    host_id = Column(db.Integer, ForeignKey('docker_host.id'))
    name = Column(db.String(32), comment="名称")
    version = Column(db.String(64), comment="版本")
    cpu = Column(db.Integer, comment="CPU个数")
    memory = Column(db.Integer, comment="内存大小M")
    file_id = Column(db.Integer, ForeignKey('attachment.id'), comment="文件名")
    file = relationship("Attachment", )
    host = relationship(Host, backref='image_resource')
    build_result = Column(db.String(4096), comment="镜像状态说明")


class Question(LogicBase):
    __tablename__ = 'ctf_question'
    name = Column(db.String(256), nullable=False, comment='题目名称')
    type = Column(db.String(16), comment="分类")
    active = Column(db.Boolean(), default=True, comment="是否启用")
    score = Column(db.Integer, default=10, comment="积分")
    desc = Column(db.String(128), default="", comment="描述")
    flag = Column(db.String(64), comment="Flag", nullable=True)
    active_flag = Column(db.Boolean(), default=False, comment="是否时动态Flag")
    attachment = Column(db.String(64), comment="附件")
    resource_id = Column(db.Integer, ForeignKey('docker_resource.id'), comment="关联compose")
    resource = relationship(DockerResource)


class Attachment(MainBase):
    """
        附件表
    """
    __tablename__ = 'attachment'
    filename = Column(db.String(32), comment='文件名')
    file_path = Column(db.String(128), comment="文件相对路径")


class CtfResource(MainBase):
    __tablename__ = 'ctf_resource'
    """
        实际的容器资源 不一定是实际的主机容器  主要是用来记录用户对容器的使用 同时绑定Flag
    """
    docker_runner_id = Column(db.Integer, ForeignKey(DockerRunner.id, ondelete='cascade'), comment="compose ID")
    docker_runner = relationship(DockerRunner)
    flag = Column(db.String(64), nullable=True, comment="环境flag")
    user_id = Column(db.Integer, ForeignKey('user.id'), comment="关联用户")
    user = relationship(User, backref='container_ref')
    destroy_time = Column(db.DateTime, comment="销毁时间")
    question_id = Column(db.Integer, ForeignKey(Question.id), comment="对应的题库")
    question = relationship(Question, backref='container_ref')


class Answer(MainBase):
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
    status = Column(db.Integer, default=1, comment="状态")
    user_id = Column(db.Integer, ForeignKey('user.id', ondelete='CASCADE'), comment="关联用户")
    question_id = Column(db.Integer, ForeignKey('ctf_question.id'), comment="对应题目")
    rank = Column(db.Integer, comment="解题名次")
    flag = Column(db.String(64), comment="提交内容")
    score = Column(db.Integer(), default=True, comment="分数")
    ip = Column(db.String(64), comment="提交答案IP")

    @property
    def status_name(self):
        return dict(self.status_choices).get(self.status)
