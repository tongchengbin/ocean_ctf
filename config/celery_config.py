from celery.schedules import crontab

beat_schedule = {
    "day_upload_req": {
        "task": "app.tasks.task_base.day_upload_req",
        "schedule": crontab(hour=0, minute=2),
    }

}
timezone = "Asia/Shanghai"
enable_utc = False