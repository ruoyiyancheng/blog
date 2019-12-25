//1 引用express框架
const express = require('express');
//2 创建网站服务器
const app = express();
//4 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin')
//5 为路由匹配请求路径
app.use('/home',home);
app.use('/admin',admin);
//3监听端口 
app.listen(80);
console.log('网站连接成功，请在localhost访问');
