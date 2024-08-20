"""
    用户相关模型
"""

from sqlalchemy import Column
from app.models import MainBase
from app.extensions import db


class User(MainBase):
    __tablename__ = 'user'
    username = Column(db.String(256), unique=True, nullable=False, comment='用户名')
    password = Column(db.String(512), nullable=False, comment='密码')
    active = Column(db.Boolean(),default=True, comment="是否启用")
    token = Column(db.String(64), comment="token", nullable=True)
