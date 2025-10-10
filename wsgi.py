import eventlet
eventlet.monkey_patch()

# 导入应用
from main import app

if __name__ == "__main__":
    app.run()
