from app import create_app
from app.extensions import celery


app = create_app()
celery.autodiscover_tasks(['app.tasks.ctf'], related_name='task')

app.app_context().push()
__all__ = ['celery']
# celery -A web.celery_worker:celery worker
