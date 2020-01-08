const express = require('express');

const admin = express.Router();

admin.get('/login',require('./admin/loginPage'));

//实现登录功能
admin.post('/login',require('./admin/login'));

//实现用户列表路由
admin.get('/user',require('./admin/userPage'));

//实现退出功能
admin.get('./logout',require('./admin/logOut'));

//创建用户编辑页面路由
admin.get('/user-edit',require('./admin/user-edit'));

//创建实现用户添加路由功能
admin.post('/user-edit',require('./admin/user-edit-fn'));

//实现用户修改路由
admin.post('/user-modify',require('./admin/user-modify'));

module.exports = admin;