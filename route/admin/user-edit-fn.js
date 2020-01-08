//引入joi模块
const Joi = require('joi');

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
        res.redirect(`/admin/user-edit?message=${e.message}`)

    }
    res.send('用户验证通过');
}