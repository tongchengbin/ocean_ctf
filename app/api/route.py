from app.extensions import db


def register_blueprints(flask_app):
    """
    这里如果在开头引用回出现循环引用的问题
        app_factory 引入了bp  bp中引入了task  task 引入了app_factory中的celery 导致无法启动celery
    """
    # register admin
    from app.api.admin import ctf,docker,system,vulnerability
    flask_app.register_blueprint(ctf.bp)
    flask_app.register_blueprint(docker.bp)
    flask_app.register_blueprint(system.bp)
    flask_app.register_blueprint(vulnerability.bp)

    # register user
    from app.api.player import views,vulnerability,ws
    flask_app.register_blueprint(vulnerability.bp)
    # flask_app.register_blueprint(ws.bp)
    flask_app.register_blueprint(views.bp)


    # 健康检查API
    from app.api.health import health_bp
    flask_app.register_blueprint(health_bp)

    def remove_db_session(_) -> None:
        # 需要手动删除session 不然多线程会遇到读取旧数据的问题
        try:
            db.session.remove()
        except AttributeError:
            pass

    flask_app.teardown_request_funcs.setdefault(None, []).append(remove_db_session)