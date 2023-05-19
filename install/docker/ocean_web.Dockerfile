FROM python:3.8.8
COPY requirements.txt /tmp/
RUN sed -i 's#http://deb.debian.org#http://mirrors.cloud.tencent.com#g' /etc/apt/sources.list
RUN sed -i 's#http://security.debian.org#http://mirrors.cloud.tencent.com#g' /etc/apt/sources.list
RUN apt-get update
COPY ./install/docker/wait-for-it.sh /usr/local/bin/
RUN chmod +x /usr/local/bin/wait-for-it.sh
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
RUN pip install --upgrade pip
RUN pip install -r /tmp/requirements.txt
