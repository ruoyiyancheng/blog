//引入express框架
const express = require('express');
//创建钩子函数
const admin = express.Router();

admin.get('/',(req,res) => {
    res.send('欢迎使用博客管理页面')
});
// 将路由对象作为成员模块进行导出
module.exports = admin;
