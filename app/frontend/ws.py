import logging
import threading
import typing

import docker
from docker.models.containers import Container
from flask import request
from flask_socketio import disconnect, emit

from app.extensions import db, socketio
from app.models.admin import Config
from app.models.docker import DockerRunner
from app.models.user import User

logger = logging.getLogger(__name__)


class SocketClient:
    def __init__(self, sid, user):
        self.sid = sid
        self.user = user

    def close(self):
        raise NotImplementedError


class LogsSession(SocketClient):
    def __init__(self, sid, user, container: Container):
        super().__init__(sid, user)
        self.log_thread = None
        self.logs_stream = None
        self.container = container
        self.socket = None
        self.stop_thread = False

    def init_socket(self):
        try:
            self.logs_stream = self.container.logs(stream=True, follow=True)
            self.log_thread = threading.Thread(target=self.stream_logs)
            self.log_thread.start()
        except Exception as e:
            logger.exception("Failed to initialize log stream")
            raise e

    def stream_logs(self):
        try:
            for log in self.logs_stream:
                print(123, log)
                if self.stop_thread:
                    break
                # 发送日志到前端
                socketio.emit("message", {"logs": {"output": log.decode("utf-8")}}, room=self.sid)
        except Exception:
            logger.exception("Error in log streaming")

    def close(self):
        self.stop_thread = True
        if hasattr(self, "log_thread"):
            self.log_thread.join()


class TerminalSession(SocketClient):
    def __init__(self, sid, user, container):
        super().__init__(sid, user)
        self.container = container
        self.exec_id = None
        self.socket = None
        self._create_exec()

    def _create_exec(self):
        try:
            # 使用 script 命令来确保输出格式正确
            exec_create = self.container.client.api.exec_create(
                self.container.id,
                'script -q -c "/bin/bash" /dev/null',  # 使用 script 命令包装 bash
                tty=True,
                stdin=True,
                stdout=True,
                stderr=True,
                environment={"TERM": "xterm", "COLUMNS": "80", "LINES": "24"},
            )
            self.exec_id = exec_create["Id"]
            self.socket = self.container.client.api.exec_start(
                self.exec_id, tty=True, socket=True, demux=False
            )._sock
        except Exception as e:
            logger.exception("Failed to create exec instance")
            raise e

    def handle_input(self, input_data):
        if not self.socket:
            raise Exception("Shell session not initialized")

        try:
            # Send input to container
            self.socket.send(input_data.encode("utf-8"))

            # Read response with timeout
            output = b""
            self.socket.settimeout(0.1)

            try:
                while True:
                    chunk = self.socket.recv(4096)
                    if not chunk:
                        break
                    output += chunk
            except Exception:
                # Timeout or no more data
                pass

            # 处理输出，移除可能的控制字符
            text = output.decode("utf-8", errors="replace")
            # 移除 ANSI 转义序列
            import re

            text = re.sub(r"\x1b\[[0-9;]*[mGKHF]", "", text)
            # 确保每行左对齐
            lines = text.splitlines()
            cleaned_lines = [line.lstrip() for line in lines]
            return "\n".join(cleaned_lines)

        except Exception as e:
            logger.exception("Error handling terminal input")
            raise e

    def close(self):
        try:
            if self.socket:
                self.socket.close()
        except Exception:
            logger.exception("Error closing terminal session")


session_clients: typing.Dict[str, typing.Union[LogsSession, TerminalSession]] = {}


@socketio.on("connect")
def handle_connect(auth):
    # 身份绑定
    namespace = request.args.get("namespace")
    runner_id = request.args.get("container_id")
    sid = getattr(request, "sid", None)
    token = auth.get("token")
    logger.info(f"Client connected: {token}")
    if not token:
        disconnect()
        return False
    user = db.session.query(User).filter(User.token == token).one_or_none()
    if not user:
        logger.error(f"Invalid token: {token}")
        disconnect()
        return False
    if sid:
        if sid in session_clients:
            # 重复登录，关闭旧连接
            session_clients[sid].close()
        try:
            # 创建 Docker 客户端
            docker_api = Config.get_config(Config.KEY_DOCKER_API)
            client = docker.DockerClient(docker_api)
            if not runner_id:
                logger.error("No container_id provided")
                disconnect()
                return False
            # 获取容器实例并验证权限
            runner = DockerRunner.get_by_id(runner_id)
            if not runner or (runner.user_id != user.id):
                logger.error(f"Invalid container access: {runner_id}")
                disconnect()
                return False
            container = client.containers.get(runner.container_id)
            if namespace == "logs":
                s = LogsSession(sid, user, container)
                s.init_socket()
                session_clients[sid] = s
                out = None
            else:
                logger.info(
                    f"Initializing terminal session for user: {user.username}, container: {runner.container_id}"
                )
                # 创建新的终端会话
                session_clients[sid] = TerminalSession(sid, user, container)
                # send black command
                out = session_clients[sid].handle_input("")
            if out:
                emit("message", {"terminal": {"output": out}})
            logger.info(
                f"Terminal session created for user: {user.username}, container: {runner.container_id}"
            )
            return True
        except Exception as e:
            logger.exception(f"Failed to initialize terminal session: {str(e)}")
            disconnect()
            return False
    return False


@socketio.on("disconnect")
def handle_disconnect():
    sid = getattr(request, "sid", None)
    if sid and sid in session_clients:
        session = session_clients[sid]
        logger.info(f"Client disconnected: {session.user.username}")
        session.close()
        del session_clients[sid]


@socketio.on("terminal")
def handle_message(message):
    sid = getattr(request, "sid", None)
    session = session_clients.get(sid)

    if not session:
        logger.warning(f"No session found for SID: {sid}")
        disconnect()
        return
    try:
        out = session.handle_input(message)
        if out:
            emit("message", {"terminal": {"output": out}})
    except Exception as e:
        logger.exception("Error processing terminal message")
        emit("message", {"terminal": {"error": str(e)}})
        session.close()
        del session_clients[sid]
        disconnect()
