import typing

from flask import jsonify


def api_success(data: typing.Union[typing.Dict, None] = None, msg="", results: typing.List[typing.Dict] = None,
                total=None):
    if data is None:
        data = {}
    if "code" in data:
        raise AssertionError("无法使用关键字:code")
    data['code'] = 0
    if msg:
        data["message"] = msg
    if results:
        data["results"] = results
    if total is not None:
        data["total"] = total
    return jsonify(data)


def response_ok(data: typing.Union[typing.Dict, None] = None, msg="", results: typing.List[typing.Dict] = None,
                total=None):
    response = {
        "code": 0,
        "message": msg
    }
    if msg is not None:
        response['message'] = msg
    if isinstance(data, dict) or data is None:
        response['data'] = data
    if total is not None:
        response['total'] = total
    if results is not None:
        response['results'] = results
    return response


def api_fail(code=1, msg="参数错误", data: typing.Union[typing.Dict, None] = None):
    if data is None:
        data = {}
    if "code" in data:
        raise AssertionError("无法使用关键字:code")
    data['code'] = code
    data['message'] = msg
    return jsonify(data)
