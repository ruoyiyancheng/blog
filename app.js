// 引用express框架
const express = require('express');
//引入路径
const path = require('path');
//引入body-parser参数，用来请求body-parser请求参数
const bodyParser = require('body-parser');
//导入express-session模块
const session = require('express-session');
//创建网站服务器
const app = express();
// require('./model/user');
require('./model/connect');
//处理post请求
app.use(bodyParser.urlencoded({extended:false}));
//配置
app.use(session({secret:'secret key'}));
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

//拦截请求，判断用户登录状态
app.use('/admin',(req,res,next) => {
    //判断用户访问的是否是登录页面
    //判断用户的登录状态
    //如果用户是登录 将请求放行
    //如果用户不是登录 将请求重定向
    if( req.url != '/login' && !req.session.username){
        //用户的请求路径不是login并且session中用户名为空者重定向
        res.redirect('/admin/login');
    }else{
        //用户是请求状态 将请求放行
        next();
    }
});

//设置拦截规则
app.use('/home',home);
app.use('/admin',admin);
//监听端口
app.listen(80);
//测试代码
console.log('服务器启动成功');