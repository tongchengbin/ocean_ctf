import random
import string

import docker
from docker import errors as docker_error
from flask import Blueprint, jsonify, render_template, request, make_response, g, redirect
from werkzeug.security import check_password_hash

from app.auth.acls import auth_cookie
from data.database import DEFAULT_DATABASE as db
from data.models import Question, User
from data.models.ctf import ImageResource, ContainerResource, Answer
from lib.utils.authlib import create_token

bp = Blueprint("view", __name__, url_prefix='')


def generate_flag():
    """
        生成flag
        return generate flag
    """
    rd_str = ''.join(random.sample(string.ascii_letters + string.digits, 32))
    return "flag{ocean%s}" % rd_str


@bp.route('/', methods=['get'])
@auth_cookie
def index():
    """
        :return :首页 后端渲染
    """
    subject = request.args.get('subject')
    subjects = ("Web","Crypto","Pwn","Iot","Misc")
    query = db.session.query(Question)
    if subject:
        query = query.filter(Question.type == subject.lower()).order_by(Question.id.desc())
    solved_qid = []
    if g.user:
        # 我已解决的题目
        solved_question = db.query(Answer.question_id).filter(Answer.user_id == g.user.id, Answer.correct == True).all()
        solved_qid = [i[0] for i in solved_question]
    data = []
    links = {}
    if g.user:
        # 获取镜像资源
        containers = db.session.query(ContainerResource,ImageResource.question_id) \
            .join(ImageResource, ImageResource.id == ContainerResource.image_resource_id
                  ) \
            .join(User, User.id == ContainerResource.user_id).order_by(ContainerResource.id.desc()).all()
        # 获取用户容器
        for c in containers:
            container, question_id = c
            links[question_id] = ["%s:%s" % (container.addr, container.container_port)]
    for item in query:
        data.append({
            "active_flag":item.active_flag,
            "id": item.id,
            "links":links.get(item.id,[]),
            "type": item.type,
            "desc":item.desc,
            "name": item.name,
            "integral": item.integral,
            "solved": 100,
            "date_created": item.date_created.strftime("%y-%m-%d"),
            "has_solved": True if item.id in solved_qid else False
        })
    response = make_response(render_template('index.html', user=g.user, challenges=data,subjects=subjects,subject=subject))
    if not g.user:
        response.delete_cookie('token')
    return response


@bp.route('/login', methods=['get', 'post'])
def login():
    """
    用户登录
    """
    if request.method == 'POST':
        username = request.form.get("username")
        password = request.form.get("password")
        if not all([username, password]):
            return render_template('login.html', error="用户名或密码不允许为空")
        user = db.query(User).filter(User.username == username).one_or_none()
        if user and check_password_hash(user.password, password):
            token = create_token()
            user.token = token
            db.session.commit()
            response = make_response(redirect('/'))
            response.set_cookie("token", token)
            return response
        else:
            return render_template('login.html', error="用户名或密码不允许为空")
    return render_template('login.html')


@bp.route('/logout', methods=['get'])
@auth_cookie
def logout():
    """
    用户登出
    """
    response = redirect('/')
    response.delete_cookie('token')
    return response


@bp.route('/challenge/<int:question>/detail', methods=['get'])
@auth_cookie
def challenge_detail(question):
    """
        题目详情 包括已解决的用户情况  点赞情况
    :param question:
    :return:
    """
    instance = db.query(Question).get(question)
    if g.user and instance.active_flag:
        # 获取镜像资源
        container = db.session.query(ContainerResource) \
            .join(ImageResource, ImageResource.id == ContainerResource.image_resource_id
                  ) \
            .join(User, User.id == ContainerResource.user_id).filter(ImageResource.question_id == instance.id) \
            .order_by(ContainerResource.id.desc()).first()
        # 获取用户容器
        if container:
            links = ["%s:%s" % (container.addr, container.container_port)]
        else:
            links = []
    else:
        links = []
    data = {
        "links": links,
        "id": instance.id,
        "name": instance.name,
        "desc": instance.desc,
        "active_flag": instance.active_flag,
        "type": instance.type,
        "solved":db.session.query(Answer).filter(Answer.question_id==instance.id,Answer.correct==1).count(),
        "date_created": instance.date_created.strftime("%y-%m-%d")
    }
    return render_template('challengeDetail.html',item = data)


@bp.route('/challenge/<int:question>/start', methods=['POST'])
@auth_cookie
def question_start(question):
    """
        创建一个题目容器
    :param question:
    :return:
    """
    if not g.user:
        return make_response(jsonify({"msg": "请先登陆"}), 403)
    user = g.user
    instance = db.query(Question).get(question)
    if not instance.active_flag:
        return make_response(jsonify({"msg": "静态题库无需动态生成"}))
    image_resource = db.query(ImageResource).filter(ImageResource.question_id == instance.id).one_or_none()
    if not image_resource:
        return make_response(jsonify({"msg": "服务器没有资源"}), 400)
    connect_url = "http://" + image_resource.host.addr
    client = docker.DockerClient(connect_url)
    image = client.images.get(image_resource.image_id)
    # 解析镜像端口
    image_config = image.attrs["ContainerConfig"]
    random_port = ""
    if "ExposedPorts" in image_config:
        port_dict = image.attrs["ContainerConfig"]["ExposedPorts"]
        for docker_port, host_port in port_dict.items():
            # docker_port_int = docker_port.replace("/", "").replace("tcp", "").replace("udp", "")
            random_port = str(random.randint(10000, 65536))
            port_dict[docker_port] = random_port
    else:
        port_dict = {}
    image_name = image.attrs["RepoTags"][0].replace(":", ".")
    container_name = f"{image_name}_{user.id}"
    # 检查docker 是否已存在
    try:
        c = client.containers.get(container_name)
        c.stop()
        c.remove()
    except docker.errors.NotFound:
        pass
    docker_container_response = client.containers.run(image=image.id, name=container_name, ports=port_dict,
                                                      detach=True)
    # 获取创建的容器
    docker_container = client.containers.get(container_name)
    flag = generate_flag()
    command = "/bin/bash /start.sh '{}'".format(flag)
    command_response = docker_container.exec_run(cmd=command, detach=True)
    # 创建容器记录
    container = ContainerResource(image_resource_id=image_resource.id, flag=flag)
    container.addr = image_resource.host.ip
    container.container_id = docker_container_response.attrs["Id"]
    container.image_id = image.attrs["Id"]
    container.container_name = container_name
    container.container_status = docker_container_response.attrs["State"]["Status"]
    container.container_port = random_port
    container.user_id = user.id
    # 创建容器
    db.session.add(container)
    db.session.commit()
    return jsonify({
        "status":0
    })


@bp.route('/challenge/<int:question>/destroy', methods=['POST'])
@auth_cookie
def question_destroy(question):
    """
        销毁容器
    :param question:
    :return:
    """
    if not g.user:
        return make_response(jsonify({"msg": "请先登陆"}), 403)
    instance = db.query(Question).get(question)
    if not instance.active_flag:
        return make_response(jsonify({"msg": "静态题库无需动态生成"}))
    containers = db.query(ContainerResource, ImageResource).join(ImageResource,
                                                                 ImageResource.id == ContainerResource.image_resource_id). \
        filter(ImageResource.question_id == instance.id, ContainerResource.user_id == g.user.id)
    for (container, image_resource) in containers:
        try:
            client = docker.DockerClient("http://{}".format(image_resource.host.addr), timeout=3)
            docker_container = client.containers.get(container.container_id)
            docker_container.kill()
            docker_container.remove()
        except docker_error.DockerException:
            pass
        db.session.delete(container)
    db.session.commit()
    return jsonify({
        "status": 0
    })


@bp.route('/user', methods=['get'])
def user_center():
    """
        用户中心 # todo
    """
    return render_template('user.html')


@bp.route('challenge/<int:question>/submit_flag', methods=["post"])
@auth_cookie
def submit_flag(question):
    """
    提交flag
        :param  question: 题目ID
        :data flag: 提交的flag
    """
    ip = request.remote_addr
    instance = db.query(Question).get(question)
    flag = request.get_json().get('flag')
    if not flag:
        return make_response(jsonify({"msg": "flag不允许为空"}), 400)
    if not g.user:
        return make_response(jsonify({"msg": "请登录"}), 403)
    answer = Answer(question_id=instance.id, user_id=g.user.id, flag=flag, ip=ip)
    if instance.active_flag:
        # 获取镜像资源
        container = db.session.query(ContainerResource).join(ImageResource,
                                                             ImageResource.id == ContainerResource.image_resource_id) \
            .filter(ImageResource.question_id == instance.id, ContainerResource.user_id == g.user.id) \
            .order_by(ContainerResource.id.desc()).first()
        # 获取用户容器
        if container:
            try:
                client = docker.DockerClient("http://{}".format(container.image_resource.host.addr))
                docker_container = client.containers.get(container.container_id)
            except docker_error.DockerException:
                return make_response(jsonify({"msg": "容器不在线"}), 502)
            if container.flag == flag:
                answer.correct = True
                # 销毁容器
                docker_container.kill()
                docker_container.remove()
                db.session.delete(container)
                db.session.add(answer)
                db.session.commit()
            else:
                answer.correct = False
                db.session.add(answer)
                db.session.commit()
                return make_response(jsonify({"msg": "Flag错误"}), 400)
        else:
            return make_response({"msg": "容器损坏，请联系管理员或重启生成!"})
    elif instance.flag == flag:
        answer.correct = True
        db.session.add(answer)
        db.session.commit()
    else:
        answer.correct = False
        db.session.add(answer)
        db.session.commit()
        return jsonify({"status": 400})
    return jsonify({"status": 0})
