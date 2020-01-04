const mongoose = require('mongoose');

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
//创建集合
User.create({
    username:'itemheima',
    email:'itheima@163.com',
    password:'123456',
    role:'admin',
    state:0
});
//将用户集合作为模块成员进行导出
module.exports = {
    User
}