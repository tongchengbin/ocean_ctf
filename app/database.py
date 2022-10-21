# -*- coding: utf-8 -*-
from datetime import datetime
from typing import Optional, Type, TypeVar

from sqlalchemy import Integer, DateTime

from app.models.base import DEFAULT_DATETIME_FORMAT
from app.extensions import db

T = TypeVar("T", bound="PkModel")
# Alias common SQLAlchemy names
Column = db.Column
relationship = db.relationship


class CRUDMixin(object):
    """Mixin that adds convenience methods for CRUD (create, read, update, delete) operations."""

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

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
            db.session.flush()
            return self.save()
        return self

    def save(self, commit=True):
        """Save the record."""
        db.session.add(self)
        if commit:
            db.session.flush()
            db.session.commit()
        return self

    def delete(self, commit: bool = True) -> None:
        """Remove the record from the database."""
        db.session.delete(self)
        if commit:
            db.session.flush()
            db.session.commit()


class Model(CRUDMixin, db.Model):
    """Base model class that includes CRUD convenience methods."""

    __abstract__ = True

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
            return cls.query.get(int(record_id))
        return None


class MainBase(Model):
    __abstract__ = True

    id = Column(Integer, autoincrement=True, primary_key=True)
    date_created = Column(DateTime, default=datetime.now)
    date_modified = Column(
        DateTime,
        default=datetime.now,
        onupdate=datetime.now,
    )

    def __init__(self, *args, **kwargs):
        super().__init__(*args, **kwargs)

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
