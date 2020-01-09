const formidable = require('formidable');
const path = require('path');
module.exports = (req ,res) => {
    //创建表单解析对象
    const form = new formidable.IncomingForm();
    //配置上传文件的位置
    form.uploadDir=path.join(__dirname,'../','../','public','uploads');
    //保留上传文件的后缀
    form.keepExtensions = true;
    //解析表单
    form.parse(req,(err ,fields,files) => {
        //err 错误对象 如果表单解析失败 err 里面存储错误信息 如果表单解析成功 err 将会是null
        // fields 对象类型 保存普通表单数据
        // files 对象类型 保存了和上传相关的数据
        res.send(files)
    });
    // res.send('ok');
}