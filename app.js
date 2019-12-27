//1 引用express框架
const express = require('express');
//6 引入路径资源文件
const path = require('path');
//12 引入body-parser请求
const bodyParser = require('body-parser');
//2 创建网站服务器
const app = express();
// require('./module/user')
//11 数据库连接模块
require('./module/connect')
//13 处理post请求参数
app.use(bodyParser.urlencoded({extended:false}))
//8 告诉express框架模板所在位置
app.set('views',path.join(__dirname,'views'));
//9 告诉express框架模板的默认后缀
app.set('view engine','art');
//10 当渲染后缀为art的模板时，所使用的模板引擎是什么
app.engine('art',require('express-art-template'));
//7 开放静态资源文件
app.use(express.static(path.join(__dirname,'public')));
//4 引入路由模块
const home = require('./route/home');
const admin = require('./route/admin')
//5 为路由匹配请求路径
app.use('/home',home);
app.use('/admin',admin);
//3监听端口 
app.listen(80);
console.log('网站连接成功，请在localhost访问');
