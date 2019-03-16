
import render from './render';
let express = require('express');
let fs = require('fs');
let app = express();
// 把public当做静态文件的根目录
app.use(express.static('public'));
app.get('*', function(req,res){
    render(req,res);
});
app.listen(3000, function(){
    console.log('server started at port 3000');
});