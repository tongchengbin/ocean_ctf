"""
    用户相关模型
"""
from enum import Enum
from sqlalchemy.orm import relationship, Mapped, mapped_column
from app.extensions import db
from app.models import Model
from app.models.docker import DockerResource, DockerRunner
from app.models.user import User


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
    filename: Mapped[str] = mapped_column(db.String(32), comment='文件名')
    file_path: Mapped[str] = mapped_column(db.String(128), comment="文件相对路径")


class ImageResource(Model):
    __tablename__ = 'image_resource'
    """
        上传的镜像资源
    """
    STATUS_BUILDING = 'building'
    STATUS_ERROR = 'error'
    STATUS_SUCCESS = 'success'
    status: Mapped[str] = mapped_column(db.String(8), default=STATUS_BUILDING, comment="状态")
    host_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey('docker_host.id'))
    name: Mapped[str] = mapped_column(db.String(32), comment="名称")
    version: Mapped[str] = mapped_column(db.String(64), comment="版本")
    cpu: Mapped[int] = mapped_column(db.Integer, comment="CPU个数")
    memory: Mapped[int] = mapped_column(db.Integer, comment="内存大小M")
    file_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey('attachment.id'), comment="文件名")
    file: Mapped[Attachment] = relationship("Attachment", )
    build_result: Mapped[str] = mapped_column(db.String(4096), comment="镜像状态说明")


class Question(Model):
    __tablename__ = 'ctf_question'
    name: Mapped[str] = mapped_column(db.String(256), nullable=False, comment='题目名称')
    type: Mapped[str] = mapped_column(db.String(16), comment="分类")
    active: Mapped[bool] = mapped_column(db.Boolean(), default=True, comment="是否启用")
    score: Mapped[int] = mapped_column(db.Integer, default=10, comment="积分")
    desc: Mapped[str] = mapped_column(db.String(1024), default="", comment="描述")
    flag: Mapped[str] = mapped_column(db.String(64), comment="Flag", nullable=True)
    active_flag: Mapped[bool] = mapped_column(db.Boolean(), default=False, comment="是否时动态Flag")
    attachment: Mapped[str] = mapped_column(db.String(64), comment="附件", nullable=True)
    resource_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey('docker_resource.id'), comment="关联compose",
                                             nullable=True)
    resource: Mapped[DockerResource] = relationship(DockerResource)


class CtfResource(Model):
    __tablename__ = 'ctf_resource'
    """
        实际的容器资源 不一定是实际的主机容器  主要是用来记录用户对容器的使用 同时绑定Flag
    """

    docker_runner_id: Mapped[int] = mapped_column(db.ForeignKey("docker_runner.id", ondelete='cascade'),
                                                  comment="compose ID")
    docker_runner: Mapped[DockerRunner] = relationship(DockerRunner)
    flag: Mapped[str] = mapped_column(db.String(64), nullable=True, comment="环境flag")
    user_id: Mapped[int] = mapped_column(db.Integer, db.ForeignKey('user.id'), comment="关联用户")
    user: Mapped[User] = relationship(User, backref='container_ref')
    destroy_time: Mapped[db.DateTime] = mapped_column(db.DateTime, comment="销毁时间")
    question_id: Mapped[int] = mapped_column(db.ForeignKey("ctf_question.id"), comment="对应的题库")
    question: Mapped[Question] = relationship(Question, backref='container_ref')


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
    status: Mapped[int] = mapped_column(default=1, comment="状态")
    user_id: Mapped[int] = mapped_column(db.ForeignKey('user.id', ondelete='CASCADE'), comment="关联用户")
    question_id: Mapped[int] = mapped_column(db.ForeignKey('ctf_question.id',ondelete='CASCADE'), comment="对应题目")
    rank: Mapped[int] = mapped_column(db.Integer, comment="解题名次", default=0)
    flag: Mapped[str] = mapped_column(db.String(64), comment="提交内容")
    score: Mapped[int] = mapped_column(db.Integer(), default=0, comment="分数")
    ip: Mapped[str] = mapped_column(db.String(64), comment="提交答案IP")

    @property
    def status_name(self):
        return dict(self.status_choices).get(self.status)
