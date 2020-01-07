const mongoose = require('mongoose');
//引入加密模块
const bcrypt = require('bcrypt');

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

//将用户集合作为模块成员进行导出
module.exports = {
    User
}