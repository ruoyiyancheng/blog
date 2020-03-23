//导入文章集合
const { Article } = require('../../model/article');
module.exports = async (req,res) => {
    //接收用户传递过来的参数
    const {cover,title,author,publishDate,content} = req.body;
    //即将要修改的用户的id
    const id = req.query.id;
    const article = await Article.findOne({_id:id});
    console.log(article);
    await Article.updateOne({_id:id},{
        cover:cover,
        title:title,
        author:author,
        publishDate:publishDate,
        content:content
    });
    res.redirect('/admin/article');
}