const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports = async (req,res,next) => {
    //接受用户传过来的参数
    const {username,email,role,state,password} = req.body;
    //即将要修改的用户id
    const id = req.query.id;
    let user =  await User.findOne({_id: id});
    //密码比对
    const isValid = await bcrypt.compare(password,user.password);
    if(isValid){
        // res.send('密码比对成功');
        //将用户的信息更新到数据库
        await User.updateOne({_id:id},{
            username:username,
            email:email,
            role:role,
            state:state
        });
        //将页面重定向到用户信息列表
        res.redirect('/admin/user');
    }else {
        let obj = {path: '/admin/user-edit',message:'密码比对失败，不能进行用户信息的修改',id:id };
        next(JSON.stringify(obj));
    }
    // res.send(user);
}