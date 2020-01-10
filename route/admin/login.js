
//导入用户集合构造函数
const { User } = require('../../model/user');
const bcrypt = require('bcrypt');
module.exports =  async(req,res) => {
	const {email,password} = req.body;
	if (email.trim().length == 0  || password.trim().length == 0) return res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'});
	//根据用户地址查询用户信息
	//如果查询到了用户 user变量的值为对象类型 对象用存储的是用户信息
	//如果没有查询到用户 user变量为空
	let user = await User.findOne({email});
	if(user){
		//查询到用户  在当前页面对密码进行了比对
		let isValid = await bcrypt.compare(password,user.password);
		console.log(user.password);
		if( isValid ){

			req.session.username = user.username;
			//将用户角色存储在session中
			req.session.role = user.role;
			
			req.app.locals.userInfo = user;
			//对用户的角色进行判断
			if(user.role == 'admin') {
				res.redirect('/admin/user');
			}else{
				res.redirect('/home/');
			}
			// res.send('登录成功');
			//重定向到用户列表页面
			
		}else{
			res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'});	
		}
	} else {
		//没有查询到用户
		res.status(400).render('admin/error',{msg:'邮件地址或者密码错误'});
	}
}

