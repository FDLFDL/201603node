var express = require('express');
var fs = require('fs');
var app = express();
//1.指定模板引擎
app.set('view engine','ejs');
//设置模板的存放目录
app.set('views',__dirname);
app.use(function(req,res,next){
    res.render = function(template,data){
        //1.读出模板的数据
        var content = fs.readFileSync(template,'utf8');
        //2.把模板里面的变量用data里的属性替换掉
        var html = content.replace(/<%=(\w+)%>/g,function(input,group1){
            //取出对象中的属性替换原来的点位符
            return data[group1];
        });
        res.send(html);
    }
    next();
});
app.get('/',function(req,res){
  //使用模板和数据渲染页面
  res.render('index.ejs',{title:'zfpx',age:7})
});


app.listen(9090);