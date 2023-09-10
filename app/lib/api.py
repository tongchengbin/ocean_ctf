import typing

from flask import jsonify


def api_success(data: typing.Union[typing.Dict, None] = None, msg=""):
    if data is None:
        data = {}
    if "code" in data:
        raise AssertionError("无法使用关键字:code")
    data['code'] = 0
    if msg:
        data["message"] = msg
    return jsonify(data)


def api_fail(code=1, msg="参数错误", data: typing.Union[typing.Dict, None] = None):
    if data is None:
        data = {}
    if "code" in data:
        raise AssertionError("无法使用关键字:code")
    data['code'] = code
    data['message'] = msg
    return jsonify(data)
