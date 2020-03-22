//导入文章集合
const { Article } = require('../../model/article');

//创建删除功能函数
module.exports = async (req,res) => {
    await Article.findOneAndDelete({_id:req.query.id});
    // res.send(result);
    res.redirect('/admin/article');
}