const mongoose = require('mongoose');

mongoose.connect('mongodb://root:itcast@localhost:27017/blog',{ useNewUrlParser: true })
    .then(() => console.log('数据库创建成功'))
    .catch(() => console.log('数据库连接失败'))