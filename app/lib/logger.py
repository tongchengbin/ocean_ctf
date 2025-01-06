import logging
import sys

# 创建全局 logger
logger = logging.getLogger('app')
logger.setLevel(logging.INFO)
# 防止日志穿透
logger.propagate = False

# 创建控制台处理器
console_handler = logging.StreamHandler(sys.stdout)
console_handler.setLevel(logging.INFO)

# 设置日志格式
formatter = logging.Formatter(
    '%(levelname)s [%(name)s] %(message)s'
)
console_handler.setFormatter(formatter)

# 添加处理器到 logger
logger.addHandler(console_handler)

# 设置 SQLAlchemy 日志级别
sqlalchemy_logger = logging.getLogger('sqlalchemy.engine')
sqlalchemy_logger.setLevel(logging.WARNING)
# 防止 SQLAlchemy 日志穿透
sqlalchemy_logger.propagate = False
