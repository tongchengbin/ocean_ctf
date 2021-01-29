"""
    用户相关模型
"""

from sqlalchemy import Column, String, Boolean

from data.models.base import MainBase


class User(MainBase):
    __tablename__ = 'user'
    username = Column(String(256), unique=True, nullable=False, comment='用户名')
    password = Column(String(128), nullable=False, comment='密码')
    active = Column(Boolean(), comment="是否启用")
    token = Column(String(64), comment="token", nullable=True)
