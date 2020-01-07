//导入bcrypt加密模块
const bcrypt = require('bcrypt');

async function run () {

    //genSalt方法接收一个数值作为参数
    //数值越大生成的字符串复杂程度越高
    //数值越小生成的字符串复杂程度越低
    //默认值是10
    //返回生成的随机字符串
    const salt = await bcrypt.genSalt(10);
    //第一个参数是要进行加密的原文
    //第二个是随机字符串

    const result =  await bcrypt.hash('123456',salt);
    console.log(salt);
    console.log(result);
}

run ();