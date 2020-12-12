#!/bin/bash
# shellcheck disable=SC2009
ps -aux | grep gunicorn | awk '{print $2}' | xargs kill
# shellcheck disable=SC2009
ps -aux | grep celery | awk '{print $2}' | xargs kill
gunicorn -w 3 -b 127.0.0.1:5000 main:app --access-logfile access.log
celery -A celery_worker worker -l info
