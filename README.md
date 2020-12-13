---
typora-root-url: ./
---

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
>
> 后台地址 /manager
>
> 后台账号 superuser/admin



# 安装

> 后台地址/manager 默认管理员密码superuser/admin
### 脚本安装
```
# 测试环境 centos8(最小化安装)
cd /opt
git clone git@github.com:tongchengbin/ocean_ctf.git
chmod +x ocean_ctf/install/install.sh
./ocean_ctf/install/install.sh
```

### 手动安装

- 安装nginx redis 以及mysql依赖
```
yum install -y mysql-devel  nginx redis git libffi-devel 
```
- 安装mysql
```
yum install -y mariadb mariadb-server
```
- 启动mariadb
```
systemctl start mariadb
```
- 配置密码
```
mysql_secure_installation
```
- Python 依赖 Python3.6+ 自行安装
> 使用Centos8 自带Python3.6可以跳过安装Python
- Centos 安装Python3.8
```
wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3rc1.tgz
tar -zxvf Python-3.8.3rc1.tgz
./configure --prefix=/usr/local/python38
make && make install
ln -s /usr/local/python38/bin/python3.8 /usr/bin/python38
ln -s /usr/local/python38/bin/pip3.8 /usr/bin/pip38
```

- clone
```
git clone  https://github.com/tongchengbin/ocean_ctf.git /opt/ocean_ctf
cd /opt/ocean_ctf
```
- 初始化数据库
```
mysql -uroot -p123456 -e "source install/ocean.sql"
```
> mysql和nginx 配置文件修改项目cfg.py即可
- 启动redis
```
systemctl start redis
```
- 安装依赖文件
```
pip3 install -r requirements.txt
```
- 启动应用
```
/usr/local/python38/bin/gunicorn -w 3 -b 127.0.0.1:5000 main:app --access-logfile 
access.log
```
> check app : curl 127.0.0.1:5000

- 启动异步任务
```
/usr/local/python38/bin/celery -A celery_worker worker -l info &
```

- 配置nginx
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
#### 启动nginx
```
systemctl start ngnx

#### 访问地址
> ip：8080

### Docker安装
- [ ] todo
# 开始
- docker服务器配置API(如果不需要动态flag跳过)
```
####  2375 端口做安全防护 限制访问ip
```
vim /usr/lib/systemd/system/docker.servicsystemctl restart dockere
ExecStart=/usr/bin/dockerd -H fd:// --containerd=/run/containerd/containerd.sock -H tcp://0.0.0.0:2375
systemctl daemon-reload
systemctl restart docker

# check: curl 127.0.0.1:2375/_ping
```
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

#### 其他截图

![](/doc/image/1.png)

![]()![2](/doc/image/2.png)

![](/doc/image/3.png)

![](/doc/image/4.png)