const { Article } = require('../../model/article');
module.exports = async (req,res) => {

    //这是一个表示当前访问的是用户管理页面 这句代码的意思是在app.js中创建了一个currentLink属性并被赋值为user
    req.app.locals.currentLink = 'article';
    
    const { id } = req.query;
    //如果当前传递了id
    if(id){
        //修改操作
        let article = await Article.findOne({_id:id});
        res.render('admin/article-edit',{
            article:article,
            link:'/admin/user-modify?id=' + id,
            button:'修改',
            methods:'post'
        });
    }else {
        //添加操作 
        res.render('admin/article-edit',{
            link:'/admin/article',
            button:'添加',
            methods:'get'
        });
    }
    
}