#!/bin/bash
# shellcheck disable=SC2009
ps -aux | grep gunicorn | awk '{print $2}' | xargs kill
# shellcheck disable=SC2009
ps -aux | grep celery | awk '{print $2}' | xargs kill
gunicorn -w 3 -b 127.0.0.1:5000 main:app --access-logfile logs/api.log -D
celery -A app:celery_app worker -l info --logfile=logs/worker.log --detach
celery -A app:celery_app beat -l info --logfile=logs/beat.log --detach
