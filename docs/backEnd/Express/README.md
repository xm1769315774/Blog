---
title: Express
date: 2021-06-23
categories: article
tags: Express
---
# Express 是什么

基于 NodeJS 的后端框架
安装：
安装脚手架：express-generator，可以执行 express --version 查看是否安装成功。
执行 express 项目名 创建初始项目。
package.json 中：
    dependencies: 生产依赖
    devDependencies: 开发依赖
    scripts：配置可以执行的脚本

# npm yarn 

yarn :
    全局安装：yarn global add express-generator
    本地安装（生产依赖）：yarn add xxx 或者 yarn add xxx -S
    本地安装（开发依赖）：yarn add xxx -D

npm ：
    全局：npm i -g xxx
    本地（生产）：npm i xxx
    本地（开发）：npm i xxx -D

npm和yarn都是包管理工具，都可以安装包和模块，大家都应该用过这两个包管理工具，用npm后会生成一个package-lock.json的文件，用yarn过后会生成一个yarn.lock的文件

npm 是按照队列执行每个 package，必须要等到当前 package 安装完成之后，才能继续后面的安装。而yarn 是同步执行所有任务，提高了性能。

yarn:
    速度快
        并行安装
            同步安装所有package中的依赖
        离线安装
            本地缓存，无需再次请求网络
    版本统一
        yarn.lock锁定安装依赖的版本，其他人安装的时候直接根据lock文件中的源安装
        包含项目的直接依赖和间接依赖（依赖的依赖）
    多注册来源
        所有依赖包只会从同一个注册来源去安装，防止混乱
    信息输出简洁
        安装时只展示必要信息，也提供了命令查询额外信息

npm:
	速度慢
		队列安装
			依次安装package中的依赖，前一个安装完才能安装后一个
	需要手动锁定版本
		运行npm shrinkwrap才会生成一个npm-shrinkwrap.json文件来锁定版本
	注册来源无法监听（需要手动npm shrinkwrap）
	信息输出冗长
		npm安装的时候会将所有安装依赖输出展示

文件目录结构

    bin/www：启动服务的文件
    node_modules：依赖包
    public：静态资源文件（可以直接访问的），相当于根目录 '/'
    routes: 路由：访问不同的路径，返回对应的数据
    views：后端模板。jade、pub、ejs、JSP
    app.js：入口文件
    package.json：项目的重要信息（scripts、依赖等）

路由的编写
```mysql
    router.post('/login', (req, res) => {
        const { userName, pwd } = req.body
        if (userName === 'zhangsan' && pwd === '123456') {
            res.send({
                status: 0,
                msg: '登陆成功！'
            })
            return
        }

        res.send({
            status: 1,
            msg: '登录失败！用户名与密码不匹配！'
        })
    })
```
req：request，请求对象，接收客户端传来的参数
res：response，响应对象，通过它返回给客户端响应数据
next：放行，继续处理。

GET 请求：req.query
POST 请求：req.body

# 跨域

域：协议 + 地址 + 端口（http://localhost:3000）
跨域（服务端与服务端之间不存在跨域限制）：只要这3者，有1个不同，就跨域了
同源限制策略：
    跨域情况下：

    Cookie、LocalStorage、IndexDB 无法获取
    DOM 无法获得
    AJAX 请求不能发送

报错：

```JSON
Access to XMLHttpRequest at 'http://localhost:3000/class0228/userList' from origin 'http://127.0.0.1:5500' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
```
    
解决跨域？

CORS：跨域资源共享。可以了解：阮大佬的日志http://www.ruanyifeng.com/blog/2016/04/cors.html

因为< script>标签不受跨域限制，因此在此基础上出现了JSONP的ajax请求方式。jsonp 只能通过src方式（只支持get请求）

vue-cli本地代理，前端修改  后台不动
```javascript
    module.exports = {
    publicPath: '/', //项目的公共路径
    devServer: {    //开发用的服务器配置
        proxy: {
            '/api': {
                target: 'http://localhost:8091',  //这里是目标服务器地址
                changeOrigin: true, //是否改变源地址
                ws: true,  //是否支持websocket协议
                pathRewrite: {  //路径重写
                    '^/api': ''       //这里一定要为空
                }
            }
        }
    }
}
```

后端设置请求头允许所有请求
```mysql
    // 设置允许跨域
    app.all('*', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // 最重要：设置响应头 Access-Control-Allow-Origin
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 放行
    });
```