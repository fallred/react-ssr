import React, {Component,Fragment} from 'react';
import {StaticRouter} from 'react-router-dom';
import Home from '../containers/Home';
import Counter from '../containers/Counter';
import Header from '../components/Header';
import routes from '../routes';
import {renderToString} from 'react-dom/server';
let express = require('express');
let fs = require('fs');
let app = express();
// 把public当做静态文件的根目录
app.use(express.static('public'));
app.get('*', function(req,res){
    let context = {name: 'zfpx'};
    let html = renderToString(
        <StaticRouter context={{context}} location={req.path}>
            <Fragment>
                <Header/>
                <div className="container" style={{marginTop: 70}}>
                    {routes}
                </div>
            </Fragment>
        </StaticRouter>
    );
    console.log(context.age);
    res.send(`
        <html>
            <head>
                <title>珠峰ssr</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"  >
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