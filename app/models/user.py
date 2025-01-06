"""
    用户相关模型
"""

from sqlalchemy.orm import mapped_column

from app.models import Model
from app.extensions import db


class User(Model):
    __tablename__ = 'user'
    username = mapped_column(db.String(256), unique=True, nullable=False, comment='用户名')
    password = mapped_column(db.String(512), nullable=False, comment='密码')
    active = mapped_column(db.Boolean(), default=True, comment="是否启用")
    token = mapped_column(db.String(64), comment="token", nullable=True)
