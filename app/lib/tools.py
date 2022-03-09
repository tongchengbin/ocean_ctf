import socket
import time

from flask import request


def get_ip():
    if request.access_route:
        ip = request.access_route[0]
    else:
        ip = request.remote_addr or '127.0.0.1'
    return ip


def telnet_port(ip, port, timeout=10):
    sk = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sk.settimeout(1)
    for _ in range(timeout):
        try:
            sk.connect((ip, port))
            sk.close()
            return True
        except (socket.timeout, ConnectionAbortedError, ConnectionRefusedError):
            time.sleep(1)
