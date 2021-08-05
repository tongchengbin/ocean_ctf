FROM python:3.8.8
COPY requirements.txt /tmp/
RUN sed -i 's/deb.debian.org/mirrors.cloud.tencent.com/g' /etc/apt/sources.list && apt-get update
RUN pip install --upgrade pip && pip install -r /tmp/requirements.txt
