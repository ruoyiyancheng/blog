module.exports = (req,res) => {

    //这是一个表示表示当前访问的是用户管理页面 这句代码的意思是在app.js中创建了一个currentLink属性并被赋值为user
    req.app.locals.currentLink = 'article';
    
    res.render('admin/article.art')
}