FROM python:3.10.12
COPY requirements.txt /tmp/
COPY requirements.prod.txt /tmp/
RUN sed -i 's|deb.debian.org|mirrors.ustc.edu.cn|g' /etc/apt/sources.list.d/debian.sources
RUN apt-get update
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install --upgrade pip
RUN pip install -r /tmp/requirements.prod.txt
