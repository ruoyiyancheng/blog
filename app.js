// 引用express框架
const express = require('express');
//创建网站服务器
const app = express();
//引入路由模块
const admin = require('./route/admin');
const home = require('./route/home');
//设置拦截规则
app.use('/home',home);
app.use('/admin',admin);
//监听端口
app.listen(80);
//测试代码
console.log('服务器启动成功');