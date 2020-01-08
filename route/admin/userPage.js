//导入用户集合构造函数
const { User } = require('../../model/user');

module.exports = async (req,res) => {

	//接受客户端传递过来的当前页参数
	let page = req.query.page || 1;
	//每一页显示的数据条数
	let pageSize = 10;
	//查询用户数据的总数
	let count = await User.countDocuments({});

	//总页数
	let total = Math.ceil(count/pageSize);
	
	//页码对应的开始位置
	let start = (page - 1)*pageSize ;
	// res.send('用户的总数是'+total);
	// return;


	//将用户信息从数据库中查询出来
	let users = await User.find({}).limit(pageSize).skip(start)

	// 渲染用户列表模板
	// res.send(users);
	res.render('admin/user',{
		users:users,
		page:page,
		total:total
	});
}