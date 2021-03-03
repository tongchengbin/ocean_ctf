from flask.views import MethodView
from lib.decorators import login_required,check_permission


class BaseMethodView(MethodView):
    # 装饰器执行循序  后到前
    decorators = [check_permission,login_required,]  # noqa
    # noinspection PyMethodMayBeStatic

    def get(self):
        pass

    # noinspection PyMethodMayBeStatic
    def post(self):
        pass

    # noinspection PyMethodMayBeStatic
    def put(self,*args):
        pass

    # noinspection PyMethodMayBeStatic
    def delete(self,*args):
        pass
