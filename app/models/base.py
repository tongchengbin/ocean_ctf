import logging

from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore
from sqlalchemy import Column, Integer, func, DateTime

from app import db

log = logging.getLogger(__name__)


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
