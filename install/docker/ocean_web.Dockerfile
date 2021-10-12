FROM python:3.8.8
COPY requirements.txt /tmp/
RUN pip install --upgrade pip && pip install -r /tmp/requirements.txt -i https://pypi.tuna.tsinghua.edu.cn/simple
