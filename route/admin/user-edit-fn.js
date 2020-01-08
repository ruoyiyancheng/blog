//引入joi模块
const Joi = require('joi');
const { User } = require('../../model/user');
//引入bcrypt模块
const bcrypt = require('bcrypt');
module.exports =async (req,res) => {

    //定义对象的验证规则
    const schema = {
        username:Joi.string().min(2).max(20).required().error(new Error('用户名未通过验证请输入长度为2-20内的用户名')),
        email:   Joi.string().email().required().error(new Error('邮箱格式不符合要求')),
        password:Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().error(new Error('密码错误')),
        role:    Joi.string().valid('normal','admin').required().error(new Error('角色值非法')),
        state:   Joi.number().valid(0,1).required().error(new Error('状态值非法'))
    };

    try {
        //实施验证
        await Joi.validate(req.body,schema);
    } catch (e) {
        // e.message;
        //验证没有通过
        // console.log(ex.message);
        // return;
        return  res.redirect(`/admin/user-edit?message=${e.message}`)

    }
    //根据邮箱地址查询用户是否存在
    let user = await User.findOne({email:req.body.email});
    //如果用户已经存在 邮箱地址已经被别人占用
    if(user) {
       return  res.redirect(`/admin/user-edit?message=邮箱地址已经被占用`);

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