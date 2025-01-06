# -*- coding: utf-8 -*-
import logging
from datetime import datetime
from typing import Optional, Type, TypeVar
from flask_sqlalchemy import SQLAlchemy as SQLAlchemyBase  # type: ignore
from sqlalchemy.orm import DeclarativeBase
from sqlalchemy.orm import Mapped, mapped_column

T = TypeVar("T", bound="PkModel")

log = logging.getLogger(__name__)

DEFAULT_DATETIME_FORMAT = "%Y-%m-%d %H:%M"


class Base(DeclarativeBase):
    pass


db = SQLAlchemyBase(model_class=Base)
Column = db.Column
relationship = db.relationship


class CRUDMixin(db.Model):
    """Mixin that adds convenience methods for CRUD (create, read, update, delete) operations."""
    __abstract__ = True

    @classmethod
    def create(cls, **kwargs):
        """Create a new record and save it the database."""
        instance = cls(**kwargs)
        return instance.save()

    def update(self, commit=True, **kwargs):
        """Update specific fields of a record."""
        for attr, value in kwargs.items():
            setattr(self, attr, value)
        if commit:
            return self.save()
        return self

    def save(self, commit=True):
        """Save the record."""
        db.session.add(self)
        if commit:
            db.session.commit()
        return self

    def delete(self, commit: bool = True) -> None:
        """Remove the record from the database."""
        if hasattr(self, 'deleted'):
            setattr(self, 'deleted', True)
            self.save()
            return
        db.session.delete(self)
        if commit:
            return db.session.commit()
        return


class Model(CRUDMixin):
    """Base model class that includes CRUD convenience methods."""

    __abstract__ = True
    id: Mapped[int] = mapped_column(db.Integer, primary_key=True)
    created_at: Mapped[datetime] = mapped_column(db.DateTime, default=datetime.now)
    updated_at: Mapped[datetime] = mapped_column(
        db.DateTime,
        default=datetime.now,
        onupdate=datetime.now,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

    @classmethod
    def get_by_id(cls: Type[T], record_id) -> Optional[T]:
        """Get record by ID."""
        if any(
                (
                        isinstance(record_id, str) and record_id.isdigit(),
                        isinstance(record_id, (int, float)),
                )
        ):
            return db.session.get(cls, int(record_id))
        return None

    @property
    def create_time_format(self):
        return self.updated_at.strftime('%Y-%m-%d %H:%M')

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
