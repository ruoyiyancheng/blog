const guard =  (req,res,next) => {
    //判断用户访问的是否是登录页面
    //判断用户的登录状态
    //如果用户是登录 将请求放行
    //如果用户不是登录 将请求重定向
    if( req.url != '/login' && !req.session.username){
        //用户的请求路径不是login并且session中用户名为空者重定向
        res.redirect('/admin/login');
    }else{
        // 如果用户是登录状态，且是普通用户，将用户重定向到博客前台首页
        if(req.session.role == 'normal') {
            return res.redirect('/home/');
        }
        //用户是请求状态 将请求放行
        next();
    }
}

module.exports = guard;