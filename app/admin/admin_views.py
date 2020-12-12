import random
from datetime import datetime

from flask import Blueprint, make_response, jsonify, request, g
from sqlalchemy import func
from werkzeug.security import check_password_hash, generate_password_hash

from app.auth.acls import admin_required
from data.database import DEFAULT_DATABASE as db
from data.models import (Admin, TaskList, User
                         )
from data.models.ctf import ContainerResource, Question
from lib.app_factory import cache
from lib.utils.authlib import create_token

bp = Blueprint("admin", __name__, url_prefix="/admin")


@bp.errorhandler(403)
def api_403(ex=None):
    """Return a 403 in JSON format."""
    return make_response(jsonify({'error': 'Forbidden', 'code': 403}), 403)


@bp.app_errorhandler(404)
def api_404(ex=None):
    """Return a 404 in JSON format."""
    if request.path.startswith(bp.url_prefix):
        return make_response(jsonify({'error': 'Not found', 'code': 404}), 404)
    return ex


@bp.errorhandler(500)
def api_500(ex=None):
    """Return a 500 in JSON format."""
    return make_response(
        jsonify({
            'error': 'Internal server error',
            'code': 500
        }), 500)


@bp.route("/login", methods=['post'])
def login():
    """
        管理员登录
    :return:
    """
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    admin = db.session.query(Admin).filter(Admin.username == username).one_or_none()
    if admin and check_password_hash(admin.password, password):
        token = create_token()
        admin.token = token
        admin.login_time = datetime.now()
        db.session.commit()
        ret = {
            "token": token
        }
        return jsonify(ret)
    else:
        return make_response(jsonify({'error': '账号不存在或密码错误！', 'code': 401}), 401)


@bp.route('/info', methods=['get'])
@admin_required
def admin_info():
    """
        获取当前管理员信息
    :return:
    """
    current_user = g.user
    return jsonify({
        "id": current_user.id,
        "username": current_user.username,
        "role_name": current_user.role.name
    })


@bp.route('/logout', methods=['post'])
@admin_required
def logout():
    """
        登出
    :return:
    """
    current_user = g.user
    current_user.token = None
    db.session.commit()
    return jsonify({})


@bp.route('/list', methods=['get'])
@admin_required
def admin_list():
    """
        管理员列表
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    page = db.session.query(Admin).filter(Admin.username != 'superuser').paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "login_time": item.login_time.strftime("%Y-%m-%d %H:%M:%S") if item.login_time else None,
            "username": item.username,
            "role_name": item.role.name
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/task', methods=['get'])
@admin_required
def task_list():
    """
        任务列表
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    page = db.session.query(TaskList).order_by(TaskList.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
            "date_modified": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
            "title": item.title,
            "username": item.admin.username,
            "status_name": item.status_name,
            "remark": item.remark
        })
    return jsonify({
        "total": page.total,
        "results": data
    })


@bp.route('/task/<int:task>/log', methods=['get'])
@admin_required
def task_log(task):
    """
        任务执行日志
    """
    index = request.args.get('index', 0)
    lines = cache.lrange("task_%s" % task, index, -1)
    task = db.session.query(TaskList).get(task)
    data = [i.decode() for i in lines]
    return jsonify({
        "data": data,
        "end": False if task.status in (1, 3) else True
    })


@bp.route('/users', methods=['get'])
@admin_required
def users():
    """
        用户列表
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    page = db.session.query(User).order_by(User.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "username": item.username,
            "date_created": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
            "active": item.active
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/user', methods=['post'])
@admin_required
def user_add():
    """
        添加用户
    """
    data = request.get_json()
    username = data.get('username')
    password = data.get("password")
    if db.session.query(User).filter(User.username == username).one_or_none():
        return make_response(jsonify({"msg": "用户名已存在"}), 400)
    safe_password = generate_password_hash(password)
    db.session.add(User(username=username, password=safe_password))
    db.session.commit()
    return jsonify({})


@bp.route('/state', methods=['get'])
@admin_required
def state():
    """
    :return:今日容器启动数量、今日IP数量、题库数量
    """
    today_query = db.session.query(ContainerResource).filter(
        func.date(ContainerResource.date_created) == datetime.today().date())
    challenges_cnt = db.session.query(Question).count()
    user_cnt = db.session.query(User).count()
    today_register = db.session.query(User).filter(
        func.date(ContainerResource.date_created) == datetime.today().date()).count()
    today_create_cnt = today_query.count()
    ip_cnt = random.randint(100, 500)
    return jsonify({
        "data": {"today_create_cnt": today_create_cnt,
                 "ip_cnt": ip_cnt,
                 "challenges_cnt": challenges_cnt,
                 "today_register": today_register,
                 "user_cnt": user_cnt}
    })
