// 引用express框架
const express = require('express');
//引入路径
const path = require('path');
//引入body-parser参数，用来请求body-parser请求参数
const bodyParser = require('body-parser');
//导入express-session模块
const session = require('express-session');
//导入art-template模板引擎
const template = require('art-template');
//导入dateformat第三方模块
const dateFormat = require('dateformat');
//导入morgan模块
const morgan = require('morgan');
//导入config模块
const config = require('config');
//创建网站服务器
const app = express();
// require('./model/user');
require('./model/connect');
//处理post请求
app.use(bodyParser.urlencoded({extended:false}));
//配置session
app.use(session({secret:'secret key'}));
//告诉路由模板所在的位置
app.set('views',path.join(__dirname,'views'));
//告诉模板默认的后缀名
app.set('view engine','art');
//使用何种方式渲染模板
app.engine('art',require('express-art-template'));

//向模板内部导入dataformat变量
template.defaults.imports.dateFormat = dateFormat;

app.use(express.static(path.join(__dirname,'public')));

console.log(config.get('title'));
//获取系统环境变量 返回值是对象
if( process.env.NODE_ENV == 'development'){

    console.log('当前是开发环境');
    //在开发环境中将客户端发送到服务器端的请求信息打印到控制台中
    app.use(morgan('dev'));
}else {
    console.log('当前是生产环境')
} 

//引入路由模块
const admin = require('./route/admin');
const home = require('./route/home');

//拦截请求，判断用户登录状态
app.use('/admin',require('./middleware/loginGuard'));

//设置拦截规则
app.use('/home',home);
app.use('/admin',admin);
// 错误处理中间件
// app.use((err,req,res,next) => {
//     const result = JSON.parse(err);
//     let params = [];
//     for(let attr in result){
//         if(attr != 'path') {
           
//             params.push( attr + '=' + result[attr]);
//         }
//     }
//     res.redirect(`${result.path}?${params.join('&')}`);
// })
//监听端口
app.listen(80);
//测试代码
console.log('服务器启动成功');