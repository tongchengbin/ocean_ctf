import click
from flask.cli import with_appcontext
from app.extensions import db
from werkzeug.security import generate_password_hash


@click.command("init-db")
@with_appcontext
def init_db_command():
    """Clear existing data and create new tables."""
    click.echo("Initialized the database.")


@click.command('init-app')
@with_appcontext
def init_superuser():
    """
        初始化管理员账号 admin:superuser/admin
    """
    from app.models.admin import Admin
    admin = db.session.query(Admin).filter(Admin.username == 'superuser').one_or_none()
    if admin:
        admin.password = generate_password_hash('admin')
        db.session.commit()
    else:
        pass


@click.command('init-data')
@with_appcontext
def init_data():
    """
        初始化数据  删除表数据 重新创建
    """
    from app.models.admin import Admin, Role
    db.drop_all()
    db.create_all()
    db.session.commit()
    # 创建角色
    for name in ("超级管理员", "运维管理员"):
        db.session.add(Role(name=name))
    # 添加超级管理员
    db.session.add(Admin(username='superuser', role_id=1, password=generate_password_hash('admin')))
    db.session.commit()


def init_app(app):
    """Register database functions with the Flask app. This is called by
    the application factory.
    """
    app.cli.add_command(init_db_command)
    app.cli.add_command(init_superuser)
    app.cli.add_command(init_data)
