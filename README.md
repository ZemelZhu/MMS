# MMS(医药管理信息系统)
## 详细
* 具体功能模块的实现在[博客](http://blog.csdn.net/qq_35442958/article/details/79244290 "CSDN博客")中有说明
* 技术栈：spring+springMVC+mybatis+easyui
* 登陆账号：admir,密码：1234
## 运行
 * 先建立mysql数据库，建立名为`mms`的数据库，再导入`res`文件夹下的`mms.sql`文件
 * 可以把target下的MMS.war放在tomcat下运行，然后访问[http://127.0.0.1:8080/MMS/login.html](http://127.0.0.1:8080/MMS/login.html)就可以
 * 也可以IDE导入项目，更新maven依赖，然后用maven命令tomcat7:run运行，然后访问[http://127.0.0.1:8080/login.html](http://127.0.0.1:8080/login.html)就可以
 * 也可以访问[http://120.78.164.110:8080/MMS/login.html](http://120.78.164.110:8080/MMS/login.html)查看