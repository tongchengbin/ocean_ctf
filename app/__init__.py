from __future__ import absolute_import

import logging
from urllib.parse import urljoin, urlparse

import redis
from apscheduler.schedulers.background import BackgroundScheduler
from werkzeug.exceptions import HTTPException
from werkzeug.security import generate_password_hash
from flask import Flask, jsonify, make_response
from flask import g
from flask import request
from flask import url_for
from flask_apscheduler import APScheduler
from flask_sqlalchemy import SQLAlchemy

from app.lib import command as command_app
from app.lib.cache import cache
from app.lib.exceptions import RestExceptions
from app.lib.middlewares import before_req_cache_ip
from app.lib.tools import telnet_port
from config import config

logger = logging.getLogger('app')
permission_white_list = ("/admin/login",)


def create_app():
    """
        特别注意 因为使用了bp路由会导致 view task main 三个互相依赖 所以在这里要去掉路由 把路由和main 绑定在一起
        当然也可以通过app_name 参数实现 但是需要使用单例模式 否者api和task 会启动两个app 一个提供接口 一个提供对celery的连接 感觉不太合理
    Application factory.
    """
    global db
    flask_app = Flask('main')
    flask_app.config.from_object(config)
    # 注册缓存
    cache.init_app(flask_app)
    register_extensions(flask_app)
    register_custom_helpers(flask_app)

    command_app.init_app(flask_app)
    flask_app.before_request_funcs.setdefault(None, []).append(before_req_cache_ip)
    return flask_app


def register_custom_helpers(scope_app):
    def url_for_self(**args):
        return url_for(request.endpoint, **dict(request.view_args, **args))

    def url_for_no_querystring(endpoint, **args):
        full_url = url_for(endpoint, **args)
        return urljoin(full_url, urlparse(full_url).path)

    def is_admin_user():
        return bool(getattr(g, 'user') and g.user.is_admin())

    def is_reviewer():
        return getattr(g, 'user') and g.user.is_reviewer()

    scope_app.jinja_env.globals['url_for_self'] = url_for_self
    scope_app.jinja_env.globals['is_admin'] = is_admin_user
    scope_app.jinja_env.globals['is_reviewer'] = is_reviewer
    scope_app.jinja_env.globals['url_for_no_querystring'] = url_for_no_querystring


def exception_handle(e):
    logger = logging.getLogger()
    logger.exception(e)
    if isinstance(e, redis.exceptions.ConnectionError):
        return make_response(jsonify({"msg": "缓存服务不可用"}), 503)
    if isinstance(e, RestExceptions):
        return make_response(jsonify({"msg": e.msg, "code": e.code}), e.status)
    if isinstance(e, HTTPException):
        return make_response(jsonify({"msg": e.name, "code": e.code}), e.code)

    exc_info = (type(e), e, e.__traceback__)
    logger.error('Exception occurred', exc_info=exc_info)
    return make_response(jsonify({"msg": type(e).__name__, "code": 500}), 500)


def register_extensions(scope_app):
    """异常捕获"""

    public_paths = ['/favicon.ico', '/static/']

    def always_authorize():
        for path in public_paths:
            if request.path.startswith(path):
                request._authorized = True
                return

    scope_app.before_request(always_authorize)

    def cors(environ):
        environ.headers['Access-Control-Allow-Origin'] = '*'
        environ.headers['Access-Control-Allow-MethodS'] = 'DELETE,PUT,OPTIONS,GET,POST'
        environ.headers['Access-Control-Allow-Headers'] = 'x-requested-with,content-type,Authorization,Token'
        return environ

    scope_app.after_request(cors)


def register_blueprints(flask_app):
    """
        这里如果在开头引用回出现循环引用的问题
            app_factory 引入了bp  bp中引入了task  task 引入了app_factory中的celery 导致无法启动celery
    """
    from app.api.ctf.views import bp as admin_ctf_bp
    from app.api.docker.views import bp as admin_docker_bp
    from app.api.sys.views import bp as admin_bp

    # 用户平台注册
    from app.api.frontend.views import bp as view_bp

    """Register Flask blueprints."""
    flask_app.register_blueprint(view_bp)
    flask_app.register_blueprint(admin_bp)
    flask_app.register_blueprint(admin_ctf_bp)
    flask_app.register_blueprint(admin_docker_bp)


def create_default_data():
    """
    添加默认数据
    @return:
    """
    from app.models.admin import Admin, Role
    # 添加角色 目前角色权限控制作为预留
    for role in ('超级管理员', '运维管理员', '审计员', '访客'):
        if not db.session.query(Role).filter(Role.name == role).first():
            db.session.add(Role(name=role))
    db.session.commit()
    superuser_role_id = db.session.query(Role.id).filter(Role.name == '超级管理员').first()[0]
    if not db.session.query(Admin).filter(Admin.username == 'admin').first():
        db.session.add(Admin(username='admin', password=generate_password_hash('admin'), role_id=superuser_role_id))
        db.session.commit()


def init_data():
    """
     初始化数据
    @return:
    """
    if not telnet_port(config.DB_HOST, int(config.DB_PORT), 30):
        logger.error("mysql service un connection!")
        exit(1)
    db.create_all()
    create_default_data()


app = create_app()
db = SQLAlchemy(app)
scheduler = APScheduler(BackgroundScheduler())
scheduler.init_app(app)
scheduler.start()
app.register_error_handler(Exception, exception_handle)
