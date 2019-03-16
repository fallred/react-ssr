import React, {Component} from 'react'
import Home from '../containers/Home';
import {renderToString} from 'react-dom/server';
let express = require('express');
let fs = require('fs');
let app = express();
app.get('/', function(req,res){
    let html = renderToString(<Home />);
    res.send(`
        <html>
            <head>
                <title>珠峰ssr</title>
            </head>
            <body>
                <div id="root">${html}</div>
            </body>
        </html>
    `);
});
app.listen(3000, function(){
    console.log('server started at port 3000');
});