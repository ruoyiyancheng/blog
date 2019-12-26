const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({   
    username:{
        type:String,
        require:true,
        minlength:2,
        maxlength:20
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        require:true
    },
    role:{
        type:String,
        require:true
    },
    state:{
        type:Number,
        default:0
    }

});

const User = mongoose.model('user',userSchema);

// User.create({
//     username:'itcast',
//     email:'itvast@13.com',
//     passwprd:123456789,
//     role:'admin',
//     state:0
// }).then( () => console.log('用户创建成功'))
// .catch(() => console.log('用户创建失败'));
module.exports = {
    User
};