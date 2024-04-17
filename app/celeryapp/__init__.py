import celery
from flask import current_app
from app.extensions import db

TaskBase = celery.Task


class ContextTask(TaskBase):
    abstract = True
    """
        celery 默认使用的是进程 所以这里可以使用全局变量db
    
    """

    def after_return(self, status, retval, task_id, args, kwargs, info):
        """
        After each Celery task, teardown our db session.

        FMI: https://gist.github.com/twolfson/a1b329e9353f9b575131

        Flask-SQLAlchemy uses create_scoped_session at startup which avoids any setup on a
        per-request basis. This means Celery can piggyback off of this initialization.
        """
        if current_app.config.get("SQLALCHEMY_COMMIT_ON_TEARDOWN"):
            if not isinstance(retval, Exception):
                db.session.commit()
        db.session.remove()

