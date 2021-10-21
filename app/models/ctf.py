"""
    用户相关模型
"""
from enum import Enum

from sqlalchemy import Column, String, Boolean, Integer, ForeignKey, DateTime, JSON
from sqlalchemy.orm import relationship

from app.models.base import MainBase
from app.models.docker import Host


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
    status = Column(String(8), default=STATUS_BUILDING, comment="状态")
    host_id = Column(Integer, ForeignKey('docker_host.id'))
    name = Column(String(32), comment="名称")
    version = Column(String(64), comment="版本")
    cpu = Column(Integer, comment="CPU个数")
    memory = Column(Integer, comment="内存大小M")
    file = Column(String(128), comment="文件名")
    host = relationship(Host, backref='image_resource')
    build_result = Column(String(4096), comment="镜像状态说明")


class Question(MainBase):
    __tablename__ = 'ctf_question'
    name = Column(String(256), nullable=False, comment='题目名称')
    type = Column(String(16), comment="分类")
    active = Column(Boolean(), default=True, comment="是否启用")
    score = Column(Integer, default=10, comment="积分")
    desc = Column(String(128), default="", comment="描述")
    flag = Column(String(64), comment="Flag", nullable=True)
    active_flag = Column(Boolean(), default=False, comment="是否时动态Flag")
    attachment = Column(JSON, comment="附件")
    image_id = Column(ForeignKey('image_resource.id', ondelete='CASCADE'), nullable=True)
    image = relationship(ImageResource)


class QuestionFile(MainBase):
    __tablename__ = 'question_file'
    question_id = Column(Integer, comment="关联的题目ID")
    filename = Column(String(32), comment='文件名')
    file_path = Column(String(128), comment="文件相对路径")


class ContainerResource(MainBase):
    __tablename__ = 'container_resource'
    """
        实际的容器资源 不一定是实际的主机容器  主要是用来记录用户对容器的使用 同时绑定Flag
    """
    image_resource_id = Column(Integer, ForeignKey('image_resource.id'), comment="容器对应的镜像资源")
    container_name = Column(String(64), comment="容器名称")
    status = Column(Integer, comment="1-启用/2-销毁", default=1)
    container_id = Column(String(64), comment="容器的实际ID", nullable=True)
    flag = Column(String(64), nullable=True, comment="容器的Flag")
    container_status = Column(String(8), comment="容器状态 不实时显示")
    container_port = Column(String(64), comment="端口映射", nullable=True)
    addr = Column(String(64), comment="快照主机IP")
    user_id = Column(Integer, ForeignKey('user.id'), comment="关联用户")
    image = relationship('ImageResource', backref='containers')
    destroy_time = Column(DateTime, comment="销毁时间")
    question_id = Column(Integer, ForeignKey('ctf_question.id'), comment="对应的题库")
    # 应该还需要对应用户


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
    __tablename__ = 'answer'
    status = Column(Integer, default=1, comment="状态")
    user_id = Column(Integer, ForeignKey('user.id'), comment="关联用户")
    question_id = Column(Integer, ForeignKey('ctf_question.id'), comment="对应题目")
    rank = Column(Integer, comment="解题名次")
    flag = Column(String(64), comment="提交内容")
    score = Column(Integer(), default=True, comment="分数")
    ip = Column(String(64), comment="提交答案IP")

    @property
    def status_name(self):
        return dict(self.status_choices).get(self.status)
