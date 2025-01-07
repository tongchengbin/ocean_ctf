import datetime
import os
import random
import socket
import string
import time


def generate_flag():
    """
        生成flag
        return generate flag
    """
    rd_str = ''.join(random.sample(string.ascii_letters + string.digits, 32))
    return "flag{ocean%s}" % rd_str



def find_directories_with_filename(directory, filename='Dockerfile'):
    directories_with_dockerfile = []
    for root, dirs, files in os.walk(directory):
        if filename in files:
            directories_with_dockerfile.append(root)
    return directories_with_dockerfile


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