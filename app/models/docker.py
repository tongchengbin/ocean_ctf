from sqlalchemy import Column, String, DateTime, Boolean

from app.models.base import MainBase


class Host(MainBase):
    __tablename__ = 'docker_host'
    name = Column(String(256), unique=True, nullable=False, comment='用户名')
    ip = Column(String(256), unique=True, nullable=False, comment="外部访问连接")
    addr = Column(String(256), unique=True, nullable=False, comment="地址")
    remark = Column(String(256), comment="备注", nullable=True)
    online_time = Column(DateTime, comment="最后一次在线时间")
    active = Column(Boolean(), default=True, comment="是否启用")
