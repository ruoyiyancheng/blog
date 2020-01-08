const mongoose = require('mongoose');
//引入加密模块
const bcrypt = require('bcrypt');
//引入joi模块
const Joi = require('joi');

const userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        minlength:2,
        maxlength:20
    },
    email: {
        type:String,
        unique:true

    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        required:true
    },
    //0：启用状态 1：禁用状态
    state:{
        type:Number,
        default:0
    }
});

const User = mongoose.model('User',userSchema);

async function createUser () {
    const salt = await bcrypt.genSalt(10);
    const pass = await bcrypt.hash('123456',salt);
    console.log(pass);
    const user = await User.create({
        username:'itemheima',
        email:'itheima@163.com',
        password:pass,
        role:'admin',
        state:0
    });
    
}

// createUser();
//创建集合
// 验证用户信息
const validataUser = user => {
    //定义对象的验证规则
    const schema = {
        username:Joi.string().min(2).max(20).required().error(new Error('用户名未通过验证请输入长度为2-20内的用户名')),
        email:   Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码错误')),
        role:    Joi.string().valid('normal','admin').required().error(new Error('角色值非法')),
        state:   Joi.number().valid(0,1).required().error(new Error('状态值非法'))
    };

    //实施验证
    return Joi.validate(user,schema);
}
//将用户集合作为模块成员进行导出
module.exports = {
    User,
    validataUser
}