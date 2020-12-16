"""
    用户相关模型
"""
from enum import Enum

from sqlalchemy import Column, String, Boolean, Integer, ForeignKey
from sqlalchemy.orm import relationship

from data.models.base import MainBase


class QType(Enum):
    web = "web"
    misc = "Misc"
    reverse = "Reverse"
    pwn = "Pwn"
    crypto = "Crypto"


class Question(MainBase):
    __tablename__ = 'ctf_question'
    name = Column(String(256), nullable=False, comment='题目名称')
    type = Column(String(16), comment="分类")
    active = Column(Boolean(), default=True, comment="是否启用")
    integral = Column(Integer, default=10, comment="积分")
    desc = Column(String(128), default="", comment="描述")
    flag = Column(String(64), comment="Flag", nullable=True)
    active_flag = Column(Boolean(), default=False, comment="是否时动态Flag")


class ImageResource(MainBase):
    __tablename__ = 'image_resource'
    """
        镜像资源  绑定在题库上 用来生成动态实例 目前一个题库对应的是一个镜像资源  后续可以考虑多主机部署同一个镜像
    """
    host_id = Column(Integer, ForeignKey('docker_host.id'))
    image_id = Column(String(128), comment="主机中实际的镜像ID")
    question_id = Column(Integer, ForeignKey('ctf_question.id'), comment="对应的题库")
    containers = relationship('ContainerResource', backref='image_resource')


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
    addr = Column(String(12), comment="快照主机IP")
    user_id = Column(Integer, ForeignKey('user.id'), comment="关联用户")
    # 应该还需要对应用户


class Answer(MainBase):
    """
        答题记录表
    """
    status_ok = 1 # 有效
    status_error = 2 # "无效"
    status_cheat = 3 # "作弊"
    status_repeat = 4 # "有效不计分"
    __tablename__ = 'answer'
    status = Column(String(32),default=1,comment="状态")
    user_id = Column(Integer, ForeignKey('user.id'), comment="关联用户")
    question_id = Column(Integer, ForeignKey('ctf_question.id'), comment="对应的题库")
    flag = Column(String(64), comment="提交内容")
    correct = Column(Boolean(), default=True, comment="是否正确")
    ip = Column(String(64), comment="提交答案IP")
