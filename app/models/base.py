import logging

from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore
from sqlalchemy.orm import DeclarativeBase

log = logging.getLogger(__name__)

DEFAULT_DATETIME_FORMAT = "%Y-%m-%d %H:%M"


class Base(DeclarativeBase):
    pass


db = SQLAlchemyBase(model_class=Base)
