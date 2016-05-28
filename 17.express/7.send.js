var express = require('express');
var path = require('path');
var app = express();

app.get('/html',function(req,res){
    res.send('<h1>hello</h1>');
});
app.get('/json',function(req,res){
    res.send({"name":"zfpx"});
});
//如果传入是数字的话，被认为是状态码
app.get('/number',function(req,res){
    res.sendStatus(500);
});
//发送文件
app.get('/index',function(req,res){
    //path must be absolute
    //resolve 从当前模块的绝对路径出发，拼下后面的参数，得到一个完整的路径
    //E:\201603node\17.express\index.html
   //res.sendFile(path.resolve('index.html'));
   res.sendFile(path.join(__dirname,'index.html'));
});



app.listen(9090);