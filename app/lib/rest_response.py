from flask import jsonify


class Code:
    AUTH_ERROR = 4003


def success(data={}, msg="success"):
    return jsonify({"data": data, "code": 0, "msg": msg})


def fail(code=1, msg="error"):
    return jsonify({"code": code, "msg": msg})
