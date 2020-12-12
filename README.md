# Ocean CTF
> 一个动态flag练习靶场平台

# 主要功能
- ctf 练习
- 动态flag
- 多人练习，弹性伸缩
- 构建漏洞库
- .........

# Install

> 默认管理员密码superuser/123456
### 脚本安装
```
# 测试环境 centos8(最小化安装)
cd /opt
git clone git@github.com:tongchengbin/ocean_ctf.git
chmod +x ocean_ctf/install/install.sh
./ocean_ctf/install/install.sh
```

### 手动安装
```
# 安装nginx redis 以及mysql依赖
yum install mysql-devel  nginx redis

# 安装mysql
yum install mariadb mariadb-server
mysql_secure_installation
mysql -uroot -p123456 -e "source install/ocean.sql"
# mysql和nginx 配置文件修改项目cfg.py即可
# Python 依赖 Python3.7+ 自行安装
pip3 install -r requirements.txt
gunicorn -w 3 -b 127.0.0.1:5000 main:app --access-logfile access.log
celery -A celery_worker worker -l info &
nginx 配置，根据实际情况调整
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

## Docker安装
- [ ] todo
# 开始
