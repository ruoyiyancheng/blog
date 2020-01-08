
const { User,validataUser } = require('../../model/user');
//引入bcrypt模块
const bcrypt = require('bcrypt');
module.exports =async (req,res,next) => {

    

    try {
        await validataUser(req.body)
    } catch (e) {
        // e.message;
        //验证没有通过
        // console.log(ex.message);
        // return;
        // return  res.redirect(`/admin/user-edit?message=${e.message}`)
        //JSON.stringfy() 将对象数据类型转换为字符串数据类型
        
        return next(JSON.stringify({path:'/admin/user-edit',message:e.message}))

    }
    //根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:req.body.email});
    //如果用户已经存在 邮箱地址已经被别人占用
    if(user) {
       return  next(JSON.stringify({path:'/admin/user-edit',message:'邮箱地址已经被占用'}))

    }
    //对邮箱密码进行加密处理
    //生成随机字符串
    const salt = await bcrypt.genSalt(10);
    //加密
    const password = await bcrypt.hash(req.body.password,salt);
    //替换密码
    req.body.password = password;
    //将用户信息添加到数据库中
    await User.create(req.body);
    //将页面重定向到用户列表页面
    res.redirect('/admin/user');
    res.send(req.body);
}