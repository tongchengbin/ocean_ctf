# Ocean CTF
> 一个动态flag练习靶场平台

# 主要功能
- ctf 练习
- 动态flag
- 多人练习，弹性伸缩
- 构建漏洞库
- .........

# 线上地址

> http://47.107.75.121:8080
>
> 用户账号 test/test




# 快速安装

> 后台地址/manager 默认管理员密码superuser/admin

#### 环境依赖

```
Python3.6+
mysql
redis
nginx(可选)
```

#### 下载代码

```
git clone https://github.com/tongchengbin/ocean_ctf.git
```
#### 修改配置文件

```
# vim config/config.py
# mysql/mariadb 配置文件  当然也可以替换其他数据库
DB_CONFIG = {
    "user": 'root',
    "password": '123456',
    "host": '127.0.0.1',
    "port": "3306",
    "db":"ocean"
}
# redis配置
REDIS_CONFIG = {
    "host":'127.0.0.1',
    'password':""
}

```

#### 初始化数据库

```
mysql -uroot -p123456 -e "source install/ocean.sql"
```
#### 安装Python依赖

```
pip install -r requirements.txt
```

#### 启动redis

```
systemctl start redis
```
#### 快速运行

```sh
# 其中manager后台通过静态文件可以访问
python main.py
# 启动celery
celery -A celery_worker worker -l info &
celery -A celery_worker beat -l info &
```

#### 创建上传文件目录
```
mkdir temp
```

#### 生产部署

```shell
gunicorn -w 3 -b 127.0.0.1:5000 main:app --access-logfile=access.log
celery -A celery_worker worker -l info &
celery -A celery_worker beat -l info &
```
#### 生产模式配置nginx

```
# vim /etc/nginx/conf.d/ctf.conf
server {
        listen       8080 default_server;
        server_name  _;
        location / {
        proxy_pass http://127.0.0.1:5000;
        }
    location /manager {
        alias /opt/ocean_ctf/install/manager/dist;
    }
    }
```
-  启动nginx

```
systemctl start ngnx
```
# 安全防护
#### 2375 端口防护
```
vim /usr/lib/systemd/system/docker.servicsystemctl restart dockere
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375
systemctl daemon-reload
systemctl restart docker

# check: curl 127.0.0.1:2375/_ping
```
# 其他截图

- 添加容器主机

  ![添加容器主机](/doc/image/添加容器主机.png)
```

```

- 编译镜像

  ![](/doc/image/编译镜像.png)

- 编译进度

  ![](/doc/image/编译进度.png)

- images list

  ![](/doc/image/镜像列表.png)

- 添加动态题库

  ![](/doc/image/添加动态题库.png)

- 首页

  ![](/doc/image/首页.png)

* 启动容器

  ![](/doc/image/启动容器.png)

- 靶场

  ![]()![动态靶场](/doc/image/动态靶场.png)

# 

![](/doc/image/1.png)

![]()![2](/doc/image/2.png)

![](/doc/image/3.png)

![](/doc/image/4.png)
