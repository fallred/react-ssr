import React, {Component} from 'react'
import Home from '../containers/Home';
import Counter from '../containers/Counter';
import {renderToString} from 'react-dom/server';
let express = require('express');
let fs = require('fs');
let app = express();
// 把public当做静态文件的根目录
app.use(express.static('public'));
app.get('/', function(req,res){
    let html = renderToString(<Counter />);
    res.send(`
        <html>
            <head>
                <title>珠峰ssr</title>
            </head>
            <body>
                <div id="root">${html}</div>
                <script src="/client.js"></script>
            </body>
        </html>
    `);
});
app.listen(3000, function(){
    console.log('server started at port 3000');
});