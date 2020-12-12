from sqlalchemy import Column, String, DateTime, Boolean
from sqlalchemy.orm import relationship

from data.models.base import MainBase


class Host(MainBase):
    __tablename__ = 'docker_host'
    name = Column(String(256), unique=True, nullable=False, comment='用户名')
    addr = Column(String(256), unique=True, nullable=False, comment="地址")
    remark = Column(String(256), comment="备注", nullable=True)
    online_time = Column(DateTime, comment="最后一次在线时间")
    active = Column(Boolean(),default=True,comment="是否启用")
    image_resources = relationship('ImageResource', backref='host')