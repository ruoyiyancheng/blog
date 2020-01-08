const express = require('express');

const admin = express.Router();

admin.get('/login',require('./admin/loginPage'));

//实现登录功能
admin.post('/login',require('./admin/login'));

//实现用户列表路由
admin.get('/user',require('./admin/userPage'));

//实现退出功能
admin.get('./logout',require('./admin/logOut'));

module.exports = admin;