# Express-apidemo
基于Express框架（mvc）的api接口框架
适合个人或者公司的api接口开发
一个基础框架

有什么价值？
----
    1：经典的mvc结构；
    2：简单，清楚的api接口；
    3：可用于中小团队API接口开发。

用到了哪些？
----
    1：Express框架；
    2：node.js;
    3:npm;
    4:mysql;

API请求实例：
----
    请求方式：post
    登陆接口：127.0.0.1:3000/v1/apidemo/users
    入参："number":18888888888,"password":123456
    返回："用户18888888888登陆成功！"
    注册接口：127.0.0.1:3000/v1/apidemo/users/?status=register
    入参："number":18888888888,"password":123456
    返回："用户18888888888注册成功！
    
安装方法：
----
    1：获取源码：git clone path
    2: 创建mysql数据库，将users.sql文件导入；
    3：修改配置数据库，可参考config目录下mysqlConfig.js文件
    4：cd到bin目录下，运行www文件，可用pm2运行
