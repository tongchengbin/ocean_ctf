FROM python:3.13-alpine

# 安装必要的构建工具
RUN apk add --no-cache gcc musl-dev linux-headers make git

WORKDIR /opt/ocean_ctf

# 配置 pip 使用清华源
RUN pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple/ && \
    pip config set global.trusted-host pypi.tuna.tsinghua.edu.cn && \
    pip install --upgrade pip

# 复制 requirements 文件并安装依赖
COPY requirements/ ./requirements/
COPY requirements.txt .

# 安装生产依赖（使用清华源）
RUN pip install --no-cache-dir -r requirements.txt

# 复制应用代码 使用挂载方式运行
# COPY . /app/

# 默认命令 - 使用 Gunicorn 启动应用
# 确保使用 wsgi.py 启动应用
CMD ["gunicorn", "--worker-class=eventlet", "--workers=2", "--bind=0.0.0.0:5000", "--preload", "wsgi:app"]
