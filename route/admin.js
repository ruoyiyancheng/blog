//引入express框架
const express = require('express');
//创建钩子函数
const admin = express.Router();

admin.get('/home',(req,res) => {
    res.send('欢迎使用博客管理页面')
});
