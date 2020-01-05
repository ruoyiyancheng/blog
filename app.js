// 引用express框架
const express = require('express');
//引入路径
const path = require('path');
//引入body-parser参数，用来请求body-parser请求参数
const bodyParser = require('body-parser');
//创建网站服务器
const app = express();
//require('./model/user');
require('./model/connect');
//处理post请求
app.use(bodyParser.urlencoded({extended:false}));
//告诉路由模板所在的位置
app.set('views',path.join(__dirname,'views'));
//告诉模板默认的后缀名
app.set('view engine','art');
//使用何种方式渲染模板
app.engine('art',require('express-art-template'));
app.use(express.static(path.join(__dirname,'public')));
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