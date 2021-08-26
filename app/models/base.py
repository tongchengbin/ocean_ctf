import logging
from datetime import datetime

from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore
from sqlalchemy import Column, Integer, func, DateTime

from app import db

log = logging.getLogger(__name__)

DEFAULT_DATETIME_FORMAT = "%Y-%m-%d %H:%M"


class SQLAlchemy(SQLAlchemyBase):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(app, options)
        options["pool_pre_ping"] = True


class MainBase(db.Model):
    # __table_args__ = {'schema': 'main'}
    __abstract__ = True

    id = Column(Integer, autoincrement=True, primary_key=True)
    date_created = Column(DateTime, default=func.current_timestamp())
    date_modified = Column(
        DateTime,
        default=func.current_timestamp(),
        onupdate=func.current_timestamp(),
    )

    @property
    def create_time_format(self):
        return self.date_created.strftime('%Y-%m-%d %H:%M')

    # 把SQLAlchemy查询对象转换成字典
    def to_dict(self):
        _dict = {}
        for col in self.__table__.columns:
            val = getattr(self, col.name)
            if isinstance(val, datetime):
                _dict[col.name] = val.strftime(DEFAULT_DATETIME_FORMAT)
            else:
                _dict[col.name] = val
        return _dict
