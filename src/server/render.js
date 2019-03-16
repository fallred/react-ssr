import React, {Component,Fragment} from 'react';
import {StaticRouter} from 'react-router-dom';
import {renderToString} from 'react-dom/server';
import Home from '../containers/Home';
import Counter from '../containers/Counter';
import Header from '../components/Header';
import routes from '../routes';
import {Provider} from 'react-redux';
import {getServerStore} from '../store';
export default function (req, res) {
    let context = {name: 'zfpx'};
    let store = getServerStore();
    // 创建仓库的时候，仓库里的数据已经有默认值
    let html = renderToString(
        <Provider store={store}>
            <StaticRouter context={{context}} location={req.path}>
                <Fragment>
                    <Header/>
                    <div className="container" style={{marginTop: 70}}>
                        {routes}
                    </div>
                </Fragment>
            </StaticRouter>
        </Provider>
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
}