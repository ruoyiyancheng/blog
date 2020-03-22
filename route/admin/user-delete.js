const { User } = require('../../model/user');
module.exports = async (req,res) => {
    // 获取要删除的用户id
    //测试代码用来显示数据结构
    // let resule = await User.find({_id: req.query.id});
    // res.send(resule);
    //根据id删除用户
    await User.findOneAndDelete({_id:req.query.id});
    //将页面重定向到用户列表页面
    res.redirect('/admin/user');
}