#! /bin/bash
yum install wget git zlib-dev mysql-devel gcc gcc-c++ autoconf automake libffi-devel nginx
yum install redis
cp install/ctf.conf  /etc/nginx/conf.d/
cd /tmp
if [ ! -f Python-3.8.3rc1.tgz ];then
        wget https://www.python.org/ftp/python/3.8.3/Python-3.8.3rc1.tgz
fi
if [ ! -d /usr/local/python38/ ];then
        tar -zxvf Python-3.8.3rc1.tgz
        cd Python-3.8.3rc1
        ./configure --prefix=/usr/local/python38
        make && make install
fi
ln -s /usr/local/python38/bin/python3.8 /usr/bin/python38
ln -s /usr/local/python38/bin/pip3.8 /usr/bin/pip38

echo "PATH=$PATH:/usr/local/python38/bin" > /etc/profile
source /etc/profile
python3=/usr/local/python38/bin/python3.8
pip3=/usr/local/python38/bin/pip3.8
workDir=/opt/ocean_ctf
cd $workDir
# 安装mysql
if [ -x "$(command -v mysql)" ];then
        echo "mysql id installed pleace configuration $workDir/cfg.py after!"
        # todo
else
        yum install mariadb mariadb-server
        systemctl start mariadb
        mysql_secure_installation
fi
# 添加数据库文件
cd $workDir
mysql -uroot -p123456 -e "source install/db_init/ocean.sql"
$pip3 install --upgrade pip
$pip3 install -r requirements.txt
systemctl start redis
chmod +x ./run.sh
echo "Pleace disable Selinux;"
setsebool -P httpd_can_network_connect 1
./run.sh
