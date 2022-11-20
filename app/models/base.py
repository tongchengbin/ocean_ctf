import logging
from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore

log = logging.getLogger(__name__)

DEFAULT_DATETIME_FORMAT = "%Y-%m-%d %H:%M"


class SQLAlchemy(SQLAlchemyBase):
    def apply_pool_defaults(self, app, options):
        super(SQLAlchemy, self).apply_pool_defaults(app, options)
        options["pool_pre_ping"] = True

