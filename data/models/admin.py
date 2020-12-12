from sqlalchemy import Column, String, Boolean, Integer, ForeignKey, DateTime
from sqlalchemy.orm import relationship

from data.models.base import MainBase


class Role(MainBase):
    __tablename__ = 's_role'
    """
        角色  后面会关联权限
    """
    name = Column(String(256), nullable=False, unique=True)
    users = relationship('Admin', backref='role')


class Admin(MainBase):
    __tablename__ = 's_admin'
    username = Column(String(256), unique=True, nullable=False, comment='用户名')
    password = Column(String(128), nullable=False, comment='密码')
    role_id = Column(Integer, ForeignKey('s_role.id'))
    active = Column(Boolean(), comment="是否启用")
    login_time = Column(DateTime, default=None)
    token = Column(String(64), comment="token", nullable=True, unique=True)
    task_list = relationship('TaskList', backref='admin')


class TaskList(MainBase):
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
    admin_id = Column(Integer, ForeignKey('s_admin.id'), comment="操作用户")
    status = Column(Integer, default=STATUS_WAIT, comment="任务状况")
    title = Column(String(64), comment="任务标题")
    target_id = Column(String(32), comment="操作对象ID 可以是主机 容器 镜像 题库等")
    remark = Column(String(256), comment="备注 报错错误信息记录")
    task_log = relationship('TaskLog', backref='task')

    @property
    def status_name(self):
        return dict(self.STATUS_CHOICES)[self.status]


class TaskLog(MainBase):
    task_id = Column(Integer, ForeignKey('task_list.id'))
    content = Column(String(1024), comment="内容")


