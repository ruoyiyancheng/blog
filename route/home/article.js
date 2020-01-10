//导入文章集合构造函数
const { Article } = require('../../model/article');
//用来处理文章详情
module.exports= async (req,res) => {
    //接收客户端传递过来的文章的id值
    const id = req.query.id;

    //根据id查询文章详细信息
    let article = await Article.findOne({_id: id}).populate('author');

    // res.send(article);
    res.render('home/article.art',{
        article: article
    })
}

