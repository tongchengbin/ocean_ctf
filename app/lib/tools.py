from flask import request


def get_ip():
    if request.access_route:
        ip = request.access_route[0]
    else:
        ip = request.remote_addr or '127.0.0.1'
    return ip
