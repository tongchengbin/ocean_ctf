import logging

import redis
from flask import make_response, jsonify
from flask_pydantic import ValidationError
from app.core.exceptions import RestExceptions

logger = logging.getLogger(__name__)



def register_error_handlers(app):
    app.register_error_handler(RestExceptions, exception_handle)
    app.register_error_handler(ValidationError, handle_pydantic_validation_error)



def handle_pydantic_validation_error(error:ValidationError):
    # 格式化错误信息
    response = {
        "code":400
    }
    if error.body_params:
        err = error.body_params[0]
        msg = f"{','.join(err['loc'])} {err['msg']}"
        response["message"] = msg
    return make_response(jsonify(response), 400)


def exception_handle(e):
    if isinstance(e, redis.exceptions.ConnectionError):
        return make_response(jsonify({"message": "缓存服务不可用"}), 503)
    if isinstance(e, RestExceptions):
        return make_response(jsonify({"message": e.msg, "code": e.code}), e.status)
    logger.error('Exception occurred', exc_info=True)

    # 返回通用错误响应
    return make_response(jsonify({
        "message": "服务器内部错误",
        "code": 500,
        "error": str(e)
    }), 500)
