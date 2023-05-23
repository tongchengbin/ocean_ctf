from flask import make_response, jsonify


class RestExceptions(Exception):
    default_msg = "error message"
    default_code = 400
    default_status = 400

    def __init__(self, msg=None, code=None, status=None):
        self.msg = msg or self.default_msg
        self.code = code or self.default_code
        self.status = status or self.default_status or self.default_code


class CheckException(RestExceptions):
    """ 字段校验错误 """
    default_code = 402


class ConstraintFailure(RestExceptions):
    """ 约束性错误
    唯一性验证等
    """
    default_code = 402


class InstanceNotFount(RestExceptions):
    """
    被引用的资源不存在
    """
    default_code = 404


class APIForbidden(RestExceptions):
    """*403* `Forbidden`

    Raise if the user doesn't have the permission for the requested resource
    but was authenticated.
    """
    default_status = 200
    default_code = 403
    default_msg = "权限验证失败"


class AuthFailed(RestExceptions):
    """*403* `Forbidden`

    Raise if the user doesn't have the permission for the requested resource
    but was authenticated.
    """
    default_code = 401
    default_msg = "账号不存在或密码错误"


class PermissionFailed(RestExceptions):
    default_code = 4003
    default_msg = "访客无权操作"
    default_status = 400


class ServerUnableError(RestExceptions):
    default_code = 4003
    default_msg = "服务初始化未完成"
    default_status = 400


def make_error_response(message, code=400):
    return make_response(jsonify({"msg": message}), code)
