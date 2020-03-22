const { Article } = require('../../model/article');
module.exports = async (req,res) => {
    // await Article.findOneAndDelete({_id:req.query.id});
    // res.redirect('/admin/article');
    console.log(articles.records);
    // res.send(articles.records);
}

// const { User } = require('../../model/user');
// module.exports = async (req,res) => {
//     // 获取要删除的用户id
    
//     //根据id删除用户
//     await User.findOneAndDelete({_id:req.query.id});
//     //将页面重定向到用户列表页面
//     res.redirect('/admin/user');
// }