from app import create_app
from app.extensions import celery

app = create_app()

celery.autodiscover_tasks(["app.ctf", "app.sys", "app.vulnerability"], related_name="tasks")

app.app_context().push()
__all__ = ["celery"]
# celery -A web.celery_worker:celery worker
