var express = require('express');
var url = require('url');
var app = express();

app.use(function(req,res,next){
  var urlObj = url.parse(req.url);
  req.path1 = urlObj.pathname;
  req.query1 = urlObj.query;
  var host = req.headers['host'].split(':');
  req.hostname1 = host[0];
  req.port1 = host[1];
    next();
});
//获取 请求中的参数
app.get('/',function(req,res){
   console.log(req.method);//请求的方法
   console.log(req.path1);//请求的路径
   console.log(req.hostname1);//请求主机名
    console.log(req.port1);//请求端口号
    console.log(req.query1);//请求的查询字符转成的对象
    res.end('hello');
});

app.listen(9090);