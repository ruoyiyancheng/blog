//1 引入express框架
const express = require('express');
//2 创建钩子函数
const admin = express.Router();

admin.get('/login',(req,res) => {
    res.render('admin/login')
});
//4 创建用户路由列表
admin.get('/user',(req,res) => {
    res.render('admin/user')
});
//3 将路由对象作为成员模块进行导出
module.exports = admin;
