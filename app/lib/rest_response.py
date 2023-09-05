import typing

from flask import jsonify, make_response


class Code:
    AUTH_ERROR = 4003


def success(data: typing.Dict = None, msg="success"):
    if data is None:
        data = {}
    return jsonify({"data": data, "code": 0, "msg": msg})


def fail(code=1, msg="error", status=None):
    if status:
        return make_response(jsonify({"code": code, "msg": msg}), status)
    return jsonify({"code": code, "msg": msg})
