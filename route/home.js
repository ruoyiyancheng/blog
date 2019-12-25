//引入express框架
const express = require('express');
//创建钩子函数
const home = express.Router();

home.get('/',(req,res) => {
    res.send('欢迎使用博客管理页面')
});
//将路由对象作为模块成员进行导出
module.exports = home;