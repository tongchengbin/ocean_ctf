# Ocean CTF
> 一个动态flag练习靶场平台

# 主要功能
- ctf 练习
- 动态flag
- 多人练习，弹性伸缩
- 构建漏洞库
- .........

# Demo地址

> http://47.107.75.121:8080
>
> 用户账号 test/test


> 后台地址/manager 默认管理员密码superuser/admin

#### 环境依赖

```
Python3.6+
mysql5.6+
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
mysql -uroot -p{password} -e "source install/ocean.sql"
```
#### 安装Python依赖

```
pip install -r requirements.txt
```


#### 快速运行

```shell
chmod +x ./run.sh
./run.sh
```
#### 生产模式配置nginx
> 默认情况下项目已经给管理后台的页面做了静态处理 但是建议使用nginx处理静态文件

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

# Docker容器

#### 安装Docker
```
curl -fsSL https://get.docker.com | bash -s docker --mirror Aliyun

启动
systemctl start docker
查看状态
systemctl status docker

您亦可以使用阿里云镜像加速来获取更好的体验

```

#### 开启 Docker API 2375 端口
```
开启API
vim /usr/lib/systemd/system/docker.service
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375
systemctl daemon-reload
systemctl restart docker

检查API
curl 127.0.0.1:2375/info
```

# 常见问题&注意事项

#### python
```
请注意设置python3为默认python版本
```

#### pip 报错mysqlclinet
```
centos: sudo yum install mysql-devel
ubuntu: sudo apt-get install libmysqlclient-dev

```

#### Docker
```
动态Flag需要在Dockerfile中写入启动运行脚本，并从文件拷贝至容器用于替换题目中的静态flag 
flag变量为$1
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


