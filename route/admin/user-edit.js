const { User } = require('../../model/user');
module.exports  = async (req,res) => {

    //这是一个表示表示当前访问的是用户管理页面 这句代码的意思是在app.js中创建了一个currentLink属性并被赋值为user
	req.app.locals.currentLink = 'user';

    const { message, id } = req.query;
    //如果当前传递了id参数
    if(id){
        //修改操作
        let user = await User.findOne({_id: id });
        res.render('admin/user-edit',{
            message:message,
            user:user,
            link:'/admin/user-modify?id=' + id,
            button:'修改'
        });
    }else {
        //添加操作
        res.render('admin/user-edit',{
            message:message,
            link:'/admin/user-edit',
            button:'添加'
        });
    }
    

}