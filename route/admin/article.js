const { Article } = require('../../model/article');
//导入mongoose-sex-page模块
const pagination = require('mongoose-sex-page');
module.exports =async (req,res) => {
    //接收客户端传递过来的页码
    const page = req.query.page;
    //这是一个表示表示当前访问的是用户管理页面 这句代码的意思是在app.js中创建了一个currentLink属性并被赋值为user
    req.app.locals.currentLink = 'article';
    //查询所有文章数据
    //populate会根据内部定义的方法根据author进行详细查询
    //page方法指定当前页
    //size方法指定每页显示的数据条数
    //display 指定客户端要显示的页码数量
    let articles = await pagination(Article).find().page(page).size(5).display(5).populate('author').exec();
    // res.send(articles);
    //渲染文章列表页面模板
   

     res.render('admin/article.art', {
		articles: articles
	});
}