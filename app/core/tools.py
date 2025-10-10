import datetime

from flask import request


def get_ip():
    if request.access_route:
        ip = request.access_route[0]
    else:
        ip = request.remote_addr or "127.0.0.1"
    return ip


def model2dict(instance):
    data = {}
    for k, v in instance.__dict__.items():
        if k.startswith("_"):
            continue
        if isinstance(v, datetime.datetime):
            data[k] = v.strftime("%Y-%m-%d %H:%M:%S")
        else:
            data[k] = v
    return data
