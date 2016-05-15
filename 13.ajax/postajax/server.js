var http = require('http');
var path = require('path');
var url = require('url');
var fs = require('fs');
var util = require('util');
var querystring = require('querystring');
var server = http.createServer(function(req,res){
    var urlObj = url.parse(req.url,true);
    var pathname = urlObj.pathname;
    if(pathname=='/'){
        fs.createReadStream('./index.html').pipe(res);
    }else if(pathname == '/favicon.ico'){
        fs.createReadStream('./favicon.ico').pipe(res);
    }else if(pathname == '/reg'){
        var str = '';
       req.on('data',function(data){
           str+=data;
       });
        // str  username=zfpx&age=6
       req.on('end',function(){
            console.log(querystring.parse(str));
           res.end(str);
       });

    }else if(pathname == '/xhr.js'){
        fs.createReadStream('./xhr.js').pipe(res);
    }else if(pathname == '/ajax'){
        res.end('hello');
    }else{
        //设置响应状态码
        res.statusCode = 404;
        res.end();
    }
}).listen(8080);
//只要能on的都是继承了eventemitter
//只要能on('data')都是可读流对象
//只要能write end的都是可写流对象
