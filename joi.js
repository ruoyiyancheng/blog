//引入joi模块
const Joi = require('joi');

//定义对象规则
const schema = {
    username:Joi.string().min(2).max(5).required().error(new Error('username未通过验证')),
    birth:Joi.number().min(1900).max(2020).error(new Error('birth未通过验证'))
};
//使用Joi.validata验证
async function run (){
    try {
        //实施验证规则
        await Joi.validate({username:'anc',birth:1996},schema);
    } catch (ex) {
        console.log(ex.message);
        return ;
    }
    console.log('验证通过'); 
}

run ();