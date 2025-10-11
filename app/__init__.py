import logging
from urllib.parse import urljoin, urlparse
import sqlalchemy.exc
from flask import Flask, g, request, url_for
from app.core.middlewares import before_req_cache_ip, global_admin_required
from config import config
from .api.route import register_blueprints
from .core import error_handlers
from .extensions import cache, db, socketio
from .utils.security import hash_password

logger = logging.getLogger(__name__)


def create_app():
    """
        特别注意 因为使用了bp路由会导致 view task main 三个互相依赖 所以在这里要去掉路由 把路由和main 绑定在一起
        当然也可以通过app_name 参数实现 但是需要使用单例模式 否者api和task 会启动两个app 一个提供接口 一个提供对celery的连接 感觉不太合理
    Application factory.
    """
    flask_app = Flask("main")
    flask_app.config.from_object(config)

    # 注册缓存
    cache.init_app(flask_app)

    register_extensions(flask_app)
    register_blueprints(flask_app)

    register_custom_helpers(flask_app)
    flask_app.before_request_funcs.setdefault(None, []).append(before_req_cache_ip)
    flask_app.before_request_funcs.setdefault(None, []).append(global_admin_required)

    # register error handler
    error_handlers.register_error_handlers(flask_app)

    try:
        db.engine.connect().close()
    except sqlalchemy.exc.OperationalError as e:
        db.session.rollback()
        logging.error(e)
        logging.error("数据库未就绪")
        exit(1)
    db.create_all()
    create_default_data()
    logger.info("数据库初始化完成")
    return flask_app


def register_custom_helpers(scope_app):
    def url_for_self(**args):
        return url_for(request.endpoint, **dict(request.view_args, **args))

    def url_for_no_querystring(endpoint, **args):
        full_url = url_for(endpoint, **args)
        return urljoin(full_url, urlparse(full_url).path)

    def is_admin_user():
        return bool(getattr(g, "user") and g.user.is_admin())

    def is_reviewer():
        return getattr(g, "user") and g.user.is_reviewer()

    scope_app.jinja_env.globals["url_for_self"] = url_for_self
    scope_app.jinja_env.globals["is_admin"] = is_admin_user
    scope_app.jinja_env.globals["is_reviewer"] = is_reviewer
    scope_app.jinja_env.globals["url_for_no_querystring"] = url_for_no_querystring


def register_extensions(scope_app):
    """异常捕获"""
    db.init_app(scope_app)
    cache.init_app(scope_app)
    # 注册 socketIo
    socketio.init_app(scope_app, cors_allowed_origins="*", logger=True)
    scope_app.app_context().push()
    public_paths = ["/favicon.ico", "/static/"]

    def always_authorize():
        for path in public_paths:
            if request.path.startswith(path):
                request._authorized = True
                return

    scope_app.before_request(always_authorize)

    def cors(environ):
        environ.headers["Access-Control-Allow-Origin"] = "*"
        environ.headers["Access-Control-Allow-MethodS"] = "DELETE,PUT,OPTIONS,GET,POST"
        environ.headers["Access-Control-Allow-Headers"] = (
            "x-requested-with,content-type,Authorization,Token"
        )
        return environ

    scope_app.after_request(cors)


def create_default_data():
    """
    添加默认数据
    @return:
    """
    from app.models.admin import Admin, Role

    # 添加角色 目前角色权限控制作为预留
    for role in ("超级管理员", "运维管理员", "审计员", "访客"):
        if not db.session.query(Role).filter_by(name=role).first():
            db.session.add(Role(name=role))
    db.session.commit()
    superuser_role_id = db.session.query(Role.id).filter(Role.name == "超级管理员").first()[0]
    if not db.session.query(Admin).filter(Admin.username == "admin").first():
        db.session.add(
            Admin(username="admin", password=hash_password("admin"), role_id=superuser_role_id)
        )
        db.session.commit()


__all__ = ["create_app"]
