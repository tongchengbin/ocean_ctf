FROM ghcr.io/astral-sh/uv:python3.13-alpine

# 安装必要的构建工具
RUN apk add --no-cache gcc musl-dev linux-headers make git

WORKDIR /app

# 复制 pyproject.toml 并安装基本依赖
COPY pyproject.toml .
RUN uv pip install -e . --system

# 安装生产依赖
RUN uv pip install -e ".[prod]" --system

# 复制应用代码
COPY . /app/

# 默认命令 - 使用 Gunicorn 启动应用
# 确保使用 wsgi.py 启动应用
CMD ["gunicorn", "--worker-class=eventlet", "--workers=2", "--bind=0.0.0.0:5000", "--preload", "wsgi:app"]
