import logging
from datetime import datetime
from app.extensions import db
from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore
from sqlalchemy import Column, Integer, func, DateTime

log = logging.getLogger(__name__)

DEFAULT_DATETIME_FORMAT = "%Y-%m-%d %H:%M"


class SQLAlchemy(SQLAlchemyBase):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(app, options)
        options["pool_pre_ping"] = True

