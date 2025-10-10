class RestExceptions(Exception):
    default_msg = "error message"
    default_code = 400
    default_status = 400

    def __init__(self, msg=None, code=None, status=None):
        self.msg = msg or self.default_msg
        self.code = code or self.default_code
        self.status = status or self.default_status or self.default_code
