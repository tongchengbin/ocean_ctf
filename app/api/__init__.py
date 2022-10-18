# from flask import request, g, make_response, jsonify, redirect, send_from_directory
#
# from app import app, db
# from app.models.admin import Admin
# from app.models.user import User
# from config.config import WHITE_URL_LIST
#
# WHITE_ADMIN_URL = (
#     '/api/admin/login',
# )
#
#
# def admin_required():
#     g.user = None
#     if request.method == 'OPTIONS':
#         return
#     url = request.path
#     if url in WHITE_ADMIN_URL:
#         return
#     if url.startswith('/api/admin'):
#         authorization = request.headers.environ.get('HTTP_AUTHORIZATION')
#         admin = db.session.query(Admin).filter(Admin.token == authorization).one_or_none()
#         if not admin:
#             return make_response(jsonify({"msg": "Forbidden", "code": 401}), 401)
#         g.user = admin
#         return
#     elif url.startswith('/api'):
#         authorization = request.headers.environ.get('HTTP_AUTHORIZATION')
#         if authorization:
#             user = db.session.query(User).filter(User.token == authorization).one_or_none()
#             if user:
#                 g.user = user
#
#     else:
#         return
#
#
# def check_permission():
#     if hasattr(g, 'user'):
#         user = g.user
#     else:
#         user = None
#     method = request.method
#     full_path = request.path
#     if full_path.startswith('/api/admin'):
#         if user and user.role_id == 4 and method not in ('OPTIONS', 'GET') and full_path not in WHITE_URL_LIST:
#             return make_response(jsonify({"msg": "访客无权操作", "code": 403}), 403)
#
#
#
#
# @app.route('/<path:filename>')
# def frontend_static(filename):
#     manager_folder = "install/frontend/dist"
#     return send_from_directory(manager_folder, filename, cache_timeout=500)
#
#
# @app.route('/manager', methods=['get'])
# def redirect_manager():
#     """
#     开发模式下 管理页面的跳转
#     @return:
#     """
#     return redirect('/manager/index.html')
#
#
# @app.route('/manager/<path:filename>')
# def manager_static(filename):
#     # 注册静态文件
#     manager_folder = "install/manager/dist"
#     return send_from_directory(manager_folder, filename, cache_timeout=500)
