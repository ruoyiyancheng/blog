const { Article } = require('../../model/article');

const pagenation = require('mongoose-sex-page');
//前台处理函数文件
module.exports= async (req,res) => {
    //获取页码值
    const page = req.query.page;
    //从数据库中查询数据
    let result = await pagenation(Article).page(page).size(4).display(5).find().populate('author').exec();
    // res.send(result);
    // return;
    //渲染模板并渲染数据
    res.render('home/default.art',{
        result: result
    });
}