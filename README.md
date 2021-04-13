# Ocean CTF
> 一个动态flag练习靶场平台

## TODO

- [x] 容器管理 
- [x] 题库管理
- [x] 动态flag
- [x] 作弊检测
- [x] 公告通知
- [x] 动态启动题库
- [x] 题库隔离
- [x] 公告通知
- [x] 排行榜
- [x] 快速部署
- [ ] 大屏展示
- [x] 权限分离
- [ ] fix bug
- [ ] fix bug
- [ ] fix bug



## 预览

线上地址 http://159.75.92.142:8080
管理后台 http://159.75.92.142:8080/manager  访客账号  test/test  

  默认超级管理员账号 superuser/admin
## 安装

### docker方式

> docker 编排会引用.env文件中的环境变量

##### 前置环境

```
docker、docker-compose、git
```

##### clone

```
git clone https://github.com/tongchengbin/ocean_ctf.git
```

##### 编译web环境
```
docker build -t ocean_web -f install/docker/ocean_web.Dockerfile .
```
##### compose编排
```
docker-compose up
```
##### 访问测试
```
curl 127.0.0.1:8080
```
### 手动安装

##### 前置环境

```
Python 3.6+
mysql 5.6+
redis
nginx(可选)
docker(可选)
supervisord(可选)

```

##### clone

```
git clone https://github.com/tongchengbin/ocean_ctf.git /opt/ocean_ctf
```

##### 安装Python依赖

```
pip install -r requirements.txt
```


##### 快速运行

```shell
chmod +x ./run.sh
./run.sh
```
##### 通过nginx代理
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
##### 使用supervisord托管程序
因为celery可能会因为程序异常而退出 所以使用supervisord托管celery 同时也可方便管理，如果使用supervisord托管进程，不要使用run.sh 启动避端口冲突

1. 安装supervisord

   ```shell
   yum install -y supervisord
   ```
3. 配置托管程序

   ```shell
   cp ./install/config/supervisord/ocean.ini /etc/supervisord.d/
   ```
   
2. 设置开机启动

   ```shell
   systemctl enable supervisord.service
   systemctl start supervisord.service
   ```

   

### 常见问题&注意事项

##### python
```
请注意设置python3为默认python版本
```

##### pip 报错mysqlclinet
```
centos: sudo yum install mysql-devel
ubuntu: sudo apt-get install libmysqlclient-dev

```

## 题库

>  题库仓库：[GitHub - tongchengbin/ctfdb: ctf 题库](https://github.com/tongchengbin/ctfdb)

#### 题库格式说明



## 开发

  后台管理源码：https://github.com/tongchengbin/ocean_manager
## 其他截图

- ![](./doc/image/6.png)

- 容器主机详情

  ​	![](./doc/image/7.png)

- 编译镜像

  ![](./doc/image/9.png)

- 编译进度

  ![](./doc/image/编译进度.png)

- 镜像列表

  ![](./doc/image/8.png)

- 添加动态题库

  ![](./doc/image/添加动态题库.png)

- 首页

  ![](./doc/image/首页.png)

* 启动容器

  ![](./doc/image/启动容器.png)

- 靶场

  ![]()![动态靶场](./doc/image/动态靶场.png) 
  
- 管理后台

  ![](./doc/image/1.png)

  ![]()![2](./doc/image/2.png)

  ![](./doc/image/3.png)

  ![](./doc/image/4.png)

  ![](./doc/image/5.png)