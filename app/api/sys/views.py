import logging
import os
import uuid
from datetime import datetime
from operator import or_

from flask import Blueprint, make_response, jsonify, request, g, current_app
from sqlalchemy import func, desc
from sqlalchemy.exc import ProgrammingError, OperationalError
from werkzeug.security import check_password_hash, generate_password_hash

from app import cache
from app import db
from app.api.sys.service import insert_operator
from app.auth.acls import admin_required
from app.lib import exceptions
from app.lib.decorators import check_permission
from app.lib.rest_response import success, fail
from app.lib.utils.authlib import create_token
from app.models.admin import (Admin, TaskList, Operator, Config)
from app.models.admin import RequestState, Role, Notice
from app.models.ctf import ContainerResource, Question
from app.models.user import User

bp = Blueprint("admin", __name__, url_prefix="/api/admin")

system_bp = Blueprint("system", __name__, url_prefix="/api/system")
logger = logging.getLogger('app')


@bp.route('/rest_pass', methods=['post'])
def admin_rest_pass():
    data = request.get_json()
    old_pass = data.get("old_pass")
    new_pass = data.get("pass")
    if not all([old_pass, new_pass]):
        return make_response(jsonify({"msg": "参数错误"}), 400)
    user = g.user
    if check_password_hash(user.password, old_pass):
        user.password = generate_password_hash(new_pass)
        db.session.commit()
        return jsonify({})
    else:
        return make_response(jsonify({"msg": "旧密码错误"}), 400)


@bp.route('/task/<int:task>/log', methods=['get'])
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


@bp.route('/upload', methods=['post'])
def upload_file():
    """
        后台文件上传入口 目前存在文件覆盖  后续处理吧
    """

    file = request.files["file"]
    filename = file.filename
    ext = filename.split('.')[-1]
    upload_dir = current_app.config.get('UPLOAD_DIR')
    if ".." in filename:
        return jsonify({"error": "文件名非法!"})
    # 生成随机文件名
    uuid_filename = str(uuid.uuid4()) + "." + ext
    file_path = os.path.join(upload_dir, uuid_filename)
    file.save(file_path)
    return jsonify({"name": filename, "filename": filename + "|" + uuid_filename})


@bp.route('/admin', methods=['get'])
def admin_list():
    """
                    管理员列表
                :return:
                """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    query = db.session.query(Admin).filter(Admin.username != 'superuser')
    page = query.paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "login_time": item.login_time.strftime("%Y-%m-%d %H:%M:%S") if item.login_time else None,
            "username": item.username,
            "role": item.role_id,
            "role_name": item.role.name
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/admin/<int:pk>', methods=['put'])
def admin_update(pk):
    # 修改信息
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')
    admin = db.session.query(Admin).get(pk)
    if username:
        admin.username = username
    if role:
        admin.role_id = role
    if password:
        admin.password = generate_password_hash(password)
    db.session.commit()
    return jsonify({})


@bp.route('/admin', methods=['post'])
def admin_create():
    data = request.get_json()
    username = data.get('username')
    password = data.get('password')
    role = data.get('role')
    if db.session.query(Admin).filter(Admin.username == username).count():
        return make_response(jsonify({"msg": "管理员已存在"}), 400)
    safe_password = generate_password_hash(password)
    admin = Admin(username=username, password=safe_password, role_id=role)
    db.session.add(admin)
    db.session.commit()
    return jsonify({})


@bp.route('/admin', methods=['delete'])
def admin_delete(pk):
    admin = db.session.query(Admin).get(pk)
    db.session.delete(admin)
    db.session.commit()
    return jsonify({})


@bp.route('/user', methods=['get'])
def user_list():
    """
                    用户列表
                """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get("search")
    query = db.session.query(User)
    if search:
        query = query.filter(User.username.contains(search))
    page = query.order_by(User.id.desc()).paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "username": item.username,
            "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
            "date_modified": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
            "active": item.active
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/user', methods=['post'])
def user_create():
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


@bp.route('/user/<int:pk>', methods=['put'])
def user_update(pk):
    data = request.get_json()
    password = data.get('password')
    user = db.session.query(User).get(pk)
    if password:
        user.password = generate_password_hash(password)
    db.session.commit()
    return jsonify({})


@bp.route('/user/<int:pk>', methods=['delete'])
def user_delete(pk):
    """
        删除用户
    @return:
    """
    user = db.session.query(User).get(pk)
    db.session.delete(user)
    db.session.commit()
    return jsonify({})


@bp.route('/index/state', methods=['get'])
def index_state():
    """
                :return:今日容器启动数量、今日IP数量、题库数量
                """
    today_query = db.session.query(ContainerResource).filter(
        func.date(ContainerResource.date_created) == datetime.today().date())
    challenges_cnt = db.session.query(Question).count()
    user_cnt = db.session.query(User).count()
    today_register = db.session.query(User).filter(
        func.date(User.date_created) == datetime.today().date()).count()
    today_create_cnt = today_query.count()
    today = datetime.today().strftime("%Y%m%d")
    ip_count = cache.scard('ip-%s' % today)
    req_count = int(cache.get("req-%s" % today).decode())

    # 统计半月用户访问情况
    req_state = db.session.query(RequestState).order_by(RequestState.day)
    req_data = {
        "x_data": [],
        "lines": [
            {"label": "活跃IP", "data": []}, {"label": "处理请求", "data": []}
        ]
    }
    """
     # {
    #     x_data: ['1', '2', '3', '4', '5'],
    #     lines: [
    #         {
    #             label: "2",
    #             data: [1, 2, 3, 4, 5]
    #         },
    #         {
    #             label: "1",
    #             data: [5, 2, 3, 4, 5]
    #         }
    #     ]
    # }
    """
    for dy in req_state:
        req_data["x_data"].append(dy.day.strftime("%m-%d"))
        req_data["lines"][0]["data"].append(dy.ip_count)
        req_data["lines"][1]["data"].append(dy.req_count)
    req_data["x_data"].append(datetime.today().strftime("%m-%d"))
    req_data["lines"][0]["data"].append(ip_count)
    req_data["lines"][1]["data"].append(req_count)
    return jsonify({
        "data": {
            "req_data": req_data,
            "today_create_cnt": today_create_cnt,
            "ip_cnt": ip_count,
            "req_count": req_count,
            "challenges_cnt": challenges_cnt,
            "today_register": today_register,
            "user_cnt": user_cnt}
    })


@bp.route('/notice', methods=['get'])
@check_permission
def notice_list():
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get('search')
    is_top = request.args.get('is_top')
    active = request.args.get('active')
    query = db.session.query(Notice)
    if is_top:
        query = query.filter(Notice.is_top == is_top)
    if active:
        query = query.filter(Notice.active == active)
    if search:
        query = query.filter(Notice.content.contains(search))
    query = query.order_by(desc(Notice.active), desc(Notice.is_top), desc(Notice.id))
    page = query.paginate(page=page, per_page=page_size)
    data = []
    for item in page.items:
        data.append({
            "id": item.id,
            "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
            "content": item.content,
            "is_top": item.is_top,
            "active": item.active
        })
    return jsonify({
        "total": page.total,
        "data": data
    })


@bp.route('/notice', methods=['post'])
def notice_create():
    data = request.get_json()
    content = data.get("content")
    is_top = data.get("isTop")
    active = data.get("active")
    instance = Notice(content=content, active=active, is_top=is_top)
    db.session.add(instance)
    db.session.commit()
    return jsonify({})


@bp.route('/notice/<int:pk>', methods=['put'])
def notice_update(pk):
    """
                    update 公告
                """
    data = request.get_json()
    content = data.get("content")
    is_top = data.get("isTop")
    active = data.get("active")
    instance = db.session.query(Notice).get(pk)
    if is_top is not None:
        instance.is_top = is_top
    if active is not None:
        instance.active = active
    if content is not None:
        instance.content = content
    db.session.commit()
    return jsonify({})


@bp.route('/notice/<int:pk>', methods=['delete'])
def notice_delete(pk):
    """
            delete 公告
        """
    instance = db.session.query(Notice).get(pk)
    db.session.delete(instance)
    db.session.commit()
    return jsonify({})


@bp.route('/login', methods=['get'])
@admin_required
def login_info():
    admin = g.user
    ret = {
        "role": admin.role_id,
        "role_name": admin.role.name if admin.role else None,
        "username": admin.username,
        "id": admin.id,
    }
    return jsonify(ret)


@bp.route('/login', methods=['post'])
def login():
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    admin = db.session.query(Admin).filter(
        Admin.username == username).one_or_none()
    if admin is None:
        raise exceptions.AuthFailed()
    if check_password_hash(admin.password, password):
        token = create_token()
        admin.token = token
        admin.login_time = datetime.now()
        db.session.commit()
        ret = {
            "token": token,
            "role": admin.role_id,
            "role_name": admin.role.name if admin.role else None,
            "username": admin.username,
            "id": admin.id,
        }
        insert_operator(code=True, content="登录成功", username=admin.username, role_name=admin.role_name)
        return jsonify(ret)
    else:
        raise exceptions.AuthFailed()


@bp.route('/role', methods=['get'])
def role_list():
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    query = db.session.query(Role)
    page_query = query.paginate(page=page, per_page=page_size)
    data = []
    for item in page_query.items:
        _item = dict()
        _item["id"] = item.id
        _item["name"] = item.name
        data.append(_item)
    return jsonify({"data": data, "total": page_query.total})


@bp.route('/role', methods=['post'])
def role_create():
    data = request.get_json()
    name = data.get("name")
    if db.session.query(Role).filter(Role.name == name).count():
        raise exceptions.ConstraintFailure("角色已存在")
    instance = Role(name=name)
    db.session.add(instance)
    db.session.commit()
    return jsonify({})


@bp.route('/role', methods=['put'])
def role_update():
    data = request.get_json()
    pk = data.get("id")
    name = data.get("name").strip()
    instance = db.session.query(Role).filter(Role.id == pk).first()
    if not instance:
        raise exceptions.InstanceNotFount("资源不存在")
    if instance.name == name:
        return jsonify({})
    if db.session.query(Role).filter(Role.name == name).count():
        raise exceptions.ConstraintFailure("角色已存在")
    instance.name = name
    db.session.commit()
    return jsonify({})


@bp.route('/role/<int:pk>', methods=['delete'])
def role_delete(pk):
    instance = db.session.query(Role).filter(Role.id == pk).first()
    if not instance:
        raise exceptions.InstanceNotFount("资源不存在")
    db.session.delete(instance)
    db.session.commit()
    return jsonify({})


@bp.route('/logout', methods=['post'])
def logout():
    """
                    登出
                :return:
            """
    current_user = g.user
    current_user.token = None
    db.session.commit()
    insert_operator(code=True, content="登出成功", username=current_user.username, role_name=current_user.role_name)
    return jsonify({})


@bp.route('/logs', methods=['get'])
def logs():
    """
            日志查询接口  api worker beat
    """
    file_name = request.args.get('filename')
    # fix sec
    filename = os.path.basename(file_name)
    lines = int(request.args.get('lines', 100))
    filepath = os.path.join(current_app.config.root_path, 'logs', "%s.log" % filename)
    if not filename or not os.path.exists(filepath.strip()):
        return make_response(jsonify({"msg": "日志不存在"}), 400)
    data = []
    with open(filepath, 'r', encoding='utf-8') as f:
        while True:
            line = f.readline()
            if not line:
                break
            data.append(line)
    return jsonify({"data": data[-lines:]})


@bp.route('/operator', methods=['get'])
def operator_list():
    """
        审计日志
    :return:
    """
    page = int(request.args.get('page', 1))
    page_size = int(request.args.get("page_size", 10))
    search = request.args.get("search")
    query = db.session.query(Operator)
    if search:
        query = query.filter(or_(Operator.username.contains(search),
                                 Operator.content.contains(search)))
    query = query.order_by(desc(Operator.id))
    page_query = query.paginate(page=page, per_page=page_size)
    data = []
    for item in page_query.items:
        _item = dict()
        _item["id"] = item.id
        _item["content"] = item.content
        _item["role"] = item.role
        _item["username"] = item.username
        _item["ip"] = item.ip
        _item["create_time"] = item.create_time_format
        _item["code"] = item.code
        data.append(_item)
    return jsonify({"data": data, "total": page_query.total})


@system_bp.post('/init')
def system_init():
    # 检测是否已经初始化
    query = db.session.query(Admin)
    if query.first():
        return fail(msg="系统已初始化完成!", status=400)
    data = request.get_json()
    username = data.get("username")
    password = data.get("password")
    db.session.add(Admin(username=username, password=generate_password_hash(password)))
    # 判断是否有角色信息
    for role in ('超级管理员', '运维管理员', '审计员', '访客'):
        if not db.session.query(Role).filter(Role.name == role).first():
            db.session.add(Role(name=role))
    db.session.commit()
    logger.info(request.get_json())
    return success({"token": 1})


@system_bp.get('/check')
def system_check():
    # 检测是否已经初始化
    try:
        has_table = db.engine.dialect.has_table(db.engine.connect(), Admin.__tablename__)
    except OperationalError as e:
        logger.exception(e)
        return fail(msg="系统正在初始化、请稍后!", status=200)
    if not has_table:
        db.create_all()
    query = db.session.query(Admin)
    data = {
        "init": False
    }
    try:
        if query.first():
            data["init"] = True
    except ProgrammingError:
        return fail(msg="系统未初始化完成、请稍后!", status=200)
    return success(data)


@system_bp.post('/config')
def set_config():
    data = request.get_json()
    for k, v in data.items():
        if k not in Config.CONFIG_MAP:
            continue
        # 校验数据
        val_type = Config.CONFIG_MAP[k][0]
        if val_type == "int" and not isinstance(v, int):
            return fail(msg="数据格式错误", status=400)
        old = db.session.query(Config).filter(Config.key == k).first()
        if old:
            old.val = v
        else:
            db.session.add(Config(key=k, val=v))
    db.session.commit()
    return success()


@system_bp.get('/config')
def get_config():
    config_list = db.session.query(Config).all()
    data = {}
    for ite in config_list:
        val_type = Config.CONFIG_MAP[ite.key][0]
        if val_type == "int":
            data[ite.key] = int(ite.val)
    return success(data)
