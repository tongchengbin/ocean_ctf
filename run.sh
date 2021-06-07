#!/bin/bash
# shellcheck disable=SC2009
ps -aux | grep uwsgi | awk '{print $2}' | xargs kill
# shellcheck disable=SC2009
ps -aux | grep celery | awk '{print $2}' | xargs kill
uwsgi --ini uwsgi.ini
celery -A app:celery_app worker -l info --logfile=logs/worker.log --detach
celery -A app:celery_app beat -l info --logfile=logs/beat.log --detach
