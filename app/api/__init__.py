from flask import request, g, make_response, jsonify

from app import app, db
from app.models.admin import Admin
from config.config import WHITE_URL_LIST

WHITE_ADMIN_URL = (
    '/api/admin/login',
)


@app.before_request
def admin_required():
    if request.method == 'OPTIONS':
        return
    url = request.path
    if url in WHITE_ADMIN_URL:
        return
    if url.startswith('/api/admin'):
        authorization = request.headers.environ.get('HTTP_AUTHORIZATION')
        if not authorization:
            return make_response(jsonify({"msg": "Forbidden", "code": 401}), 401)
        admin = db.session.query(Admin).filter(Admin.token == authorization).one_or_none()
        if not admin:
            return make_response(jsonify({"msg": "Forbidden", "code": 401}), 401)
        g.user = admin
        return
    else:
        return


@app.before_request
def check_permission():
    if hasattr(g, 'user'):
        user = g.user
    else:
        user = None
    method = request.method
    full_path = request.path
    if user and user.role_id == 4 and method not in ('OPTIONS', 'GET') and full_path not in WHITE_URL_LIST:
        return make_response(jsonify({"msg": "访客无权操作", "code": 403}), 403)


@app.teardown_appcontext
def shutdown_session(exception=None):
    db.session.remove()
