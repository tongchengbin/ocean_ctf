import os
from datetime import datetime

from flask import Blueprint, make_response, jsonify, request, g, current_app
from sqlalchemy import func
from werkzeug.security import check_password_hash, generate_password_hash

from app.auth.acls import admin_required
from data.database import DEFAULT_DATABASE as db
from data.models import (Admin, TaskList, User
                         )
from data.models.admin import RequestState, Role, Notice
from data.models.ctf import ContainerResource, Question
from lib import exceptions
from lib.app_factory import cache
from lib.decorators import login_required,check_permission
from lib.rest_views import BaseMethodView
from lib.utils.authlib import create_token

bp = Blueprint("admin", __name__, url_prefix="/admin")


@bp.route('/rest_pass', methods=['post'])
@admin_required
@check_permission
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


@bp.route('/upload', methods=['post'])
def upload_file():
    """
        文件上传入口
    """

    file = request.files["file"]
    filename = file.filename
    upload_dir = current_app.config.get('UPLOAD_DIR')
    root_path = current_app.config.root_path
    if ".." in filename:
        return jsonify({"error": "文件名非法!"})
    # 目前的文件处理是直接覆盖
    file_path = os.path.join(root_path, upload_dir, filename)
    file.save(file_path)
    return jsonify({"name": filename, "file_path": os.path.join(upload_dir, filename)})


class AdminView(BaseMethodView):
    def get(self):
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
                "role": item.role_id,
                "role_name": item.role.name
            })
        return jsonify({
            "total": page.total,
            "data": data
        })

    def put(self, pk):
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

    def post(self):
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

    def delete(self, pk):
        admin = db.session.query(Admin).get(pk)
        db.session.delete(admin)
        db.session.commit()
        return jsonify({})


class UserView(BaseMethodView):
    def get(self):
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
                "date_created": item.date_created.strftime("%Y-%m-%d %H:%M:%S") if item.date_created else None,
                "date_modified": item.date_modified.strftime("%Y-%m-%d %H:%M:%S") if item.date_modified else None,
                "active": item.active
            })
        return jsonify({
            "total": page.total,
            "data": data
        })

    def post(self):
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

    def put(self, pk):
        data = request.get_json()
        username = data.get('username')
        user = db.query(User).get(pk)
        if username:
            user.username = username
        db.session.commit()
        return jsonify({})


class IndexStateView(BaseMethodView):
    def get(self):
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


class NoticeView(BaseMethodView):
    def get(self):
        page = int(request.args.get('page', 1))
        page_size = int(request.args.get("page_size", 10))
        search = request.args.get('search')
        query = db.session.query(Notice)
        if search:
            query = query.filter(Notice.content.like('%%%s%%' % search))
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

    def post(self):
        data = request.get_json()
        content = data.get("content")
        is_top = data.get("isTop")
        active = data.get("active")
        instance = Notice(content=content, active=active, is_top=is_top)
        db.session.add(instance)
        db.session.commit()
        return jsonify({})

    def put(self, notice_id):
        """
                update 公告
            """
        data = request.get_json()
        content = data.get("content")
        is_top = data.get("isTop")
        active = data.get("active")
        instance = db.session.query(Notice).get(notice_id)
        if is_top is not None:
            instance.is_top = is_top
        if active is not None:
            instance.active = active
        if content is not None:
            instance.content = content
        db.session.commit()
        return jsonify({})

    def delete(self, notice_id):
        """
                delete 公告
            """
        instance = db.session.query(Notice).get(notice_id)
        db.session.delete(instance)
        db.session.commit()
        return jsonify({})


class LogsView(BaseMethodView):
    def get(self):
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


class LoginView(BaseMethodView):
    decorators = ()

    @login_required
    def get(self):
        admin = g.user
        ret = {
            "role": admin.role_id,
            "role_name": admin.role.name if admin.role else None,
            "username": admin.username,
            "id": admin.id,
        }
        return jsonify(ret)

    def post(self):
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
            return jsonify(ret)
        else:
            raise exceptions.AuthFailed()


class RoleView(BaseMethodView):
    def get(self):
        page = int(request.args.get('page', 1))
        page_size = int(request.args.get("page_size", 10))
        query = db.query(Role)
        page_query = query.paginate(page=page, per_page=page_size)
        data = []
        for item in page_query.items:
            _item = dict()
            _item["id"] = item.id
            _item["name"] = item.name
            data.append(_item)
        return jsonify({"data": data, "total": page_query.total})

    def post(self):
        data = request.get_json()
        name = data.get("name")
        if db.query(Role).filter(Role.name == name).count():
            raise exceptions.ConstraintFailure("角色已存在")
        instance = Role(name=name)
        db.session.add(instance)
        db.session.commit()
        return jsonify({})

    def put(self):
        data = request.get_json()
        pk = data.get("id")
        name = data.get("name").strip()
        instance = db.query(Role).filter(Role.id == pk).first()
        if not instance:
            raise exceptions.InstanceNotFount("资源不存在")
        if instance.name == name:
            return jsonify({})
        if db.query(Role).filter(Role.name == name).count():
            raise exceptions.ConstraintFailure("角色已存在")
        instance.name = name
        db.session.commit()
        return jsonify({})

    def delete(self, role_id):
        instance = db.query(Role).filter(Role.id == role_id).first()
        if not instance:
            raise exceptions.InstanceNotFount("资源不存在")
        db.session.delete(instance)
        db.session.commit()
        return jsonify({})


class LogoutView(BaseMethodView):
    def post(self):
        """
                登出
            :return:
        """
        current_user = g.user
        current_user.token = None
        db.session.commit()
        return jsonify({})


bp.add_url_rule('/login', view_func=LoginView.as_view('login'), methods=['get', 'post'])
bp.add_url_rule('/logout', view_func=LogoutView.as_view('logout'), methods=['post'])
bp.add_url_rule('/role', view_func=RoleView.as_view('role'), methods=['GET', 'POST'], endpoint='role')
bp.add_url_rule('/role/<int:role_id>', view_func=RoleView.as_view('role'), methods=['GET', 'PUT', 'DELETE'],
                endpoint='role_detail')
bp.add_url_rule('/logs', view_func=LogsView.as_view('logs'), methods=['get'])
bp.add_url_rule('/notice', view_func=NoticeView.as_view('notice'), methods=['get', 'post'])
bp.add_url_rule('/notice/<int:notice_id>', view_func=NoticeView.as_view('notice_detail'), methods=['delete', 'put'])
bp.add_url_rule('/admin', view_func=AdminView.as_view('admin'), methods=['get', 'post'])
bp.add_url_rule('/admin/<int:pk>', view_func=AdminView.as_view('admin_detail'), methods=['get', 'put', 'delete'])
bp.add_url_rule('/user', view_func=UserView.as_view('user'), methods=['get', 'post'])
bp.add_url_rule('/user/<int:pk>', view_func=UserView.as_view('user_detail'), methods=['delete', 'put'])
bp.add_url_rule('index/state', view_func=IndexStateView.as_view('index_state'), methods=['get'])
