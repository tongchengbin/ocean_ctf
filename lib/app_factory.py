import logging
from urllib.parse import urljoin, urlparse

from flask import Flask, send_from_directory
from flask import g
from flask import request
from flask import url_for
from werkzeug import Response
from werkzeug.exceptions import Forbidden

from config import config
from data.database import init_app as init_db
from lib import command as command_app
from lib.cache import cache
from lib.middlewares import before_req_cache_ip


def create_app(test_config=None):
    """
        特别注意 因为使用了bp路由会导致 view task main 三个互相依赖 所以在这里要去掉路由 把路由和main 绑定在一起
        当然也可以通过app_name 参数实现 但是需要使用单例模式 否者api和task 会启动两个app 一个提供接口 一个提供对celery的连接 感觉不太合理
    Application factory.
    """
    flask_app = Flask('main')
    flask_app.config.from_object(config)

    if flask_app.debug:
        # 日志传递
        flask_app.logger.propagate = True
    # 注册缓存
    cache.init_app(flask_app)
    register_extensions(flask_app, test_config=test_config)
    register_custom_helpers(flask_app)

    # Connect to the database and initialize SQLAlchemy.
    init_db(flask_app)
    command_app.init_app(flask_app)
    flask_app.before_request_funcs.setdefault(None, []).append(before_req_cache_ip)

    return flask_app


def register_custom_helpers(app):
    def url_for_self(**args):
        return url_for(request.endpoint, **dict(request.view_args, **args))

    def url_for_no_querystring(endpoint, **args):
        full_url = url_for(endpoint, **args)
        return urljoin(full_url, urlparse(full_url).path)

    def is_admin_user():
        return bool(getattr(g, 'user') and g.user.is_admin())

    def is_reviewer():
        return getattr(g, 'user') and g.user.is_reviewer()

    app.jinja_env.globals['url_for_self'] = url_for_self
    app.jinja_env.globals['is_admin'] = is_admin_user
    app.jinja_env.globals['is_reviewer'] = is_reviewer
    app.jinja_env.globals['url_for_no_querystring'] = url_for_no_querystring


def register_extensions(app, test_config=None):
    """异常捕获"""

    public_paths = ['/favicon.ico', '/static/']

    def always_authorize():
        for path in public_paths:
            if request.path.startswith(path):
                request._authorized = True
                return

    app.before_request(always_authorize)

    def cors(environ):
        environ.headers['Access-Control-Allow-Origin'] = '*'
        environ.headers['Access-Control-Allow-MethodS'] = 'DELETE,PUT,OPTIONS,GET,POST'
        environ.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type,Authorization,Token'
        return environ

    def check_or_404(response: Response):
        if response.status_code // 100 != 2:
            return response
        try:
            return response
        except Forbidden:
            logging.warning('Automatically denied access to response %d of %s',
                            response.status_code, request.path)
            raise

    app.after_request(cors)
    app.after_request(check_or_404)


def register_blueprints(flask_app):
    """
        这里如果在开头引用回出现循环引用的问题
            app_factory 引入了bp  bp中引入了task  task 引入了app_factory中的celery 导致无法启动celery
    """
    from app.admin.ctf_views import bp as admin_ctf_bp
    from app.admin.docker_views import bp as admin_docker_bp
    from app.admin.admin_views import bp as admin_bp

    # 用户平台注册
    from app.frontend.views import bp as view_bp

    """Register Flask blueprints."""
    flask_app.register_blueprint(view_bp)
    flask_app.register_blueprint(admin_bp)
    flask_app.register_blueprint(admin_ctf_bp)
    flask_app.register_blueprint(admin_docker_bp)

    # 注册静态文件
    def send_manager_file(filename):
        cache_timeout = None
        manager_folder = 'install/manager/dist/'
        return send_from_directory(manager_folder, filename, cache_timeout=cache_timeout)

    flask_app.add_url_rule(r"/manager/<path:filename>",
                           endpoint="manager",
                           host=False,
                           view_func=send_manager_file)


app = create_app()
