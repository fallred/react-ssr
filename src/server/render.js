import React, {Component,Fragment} from 'react';
import {StaticRouter,matchPath,Route} from 'react-router-dom';
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
    // 获取要渲染的组件,matchPath是路由提供的工具方法，可以用来判断路径和路由对象是否匹配
    // 正则 /api/:id/
    // console.log('routes:',routes);
    let matchRoutes = routes.filter(route=>{
        return matchPath(req.path,route.path)
    });
    let promises = [];
    matchRoutes.forEach(route => {
        if (route.loadData) {
            promises.push(route.loadData(store));
        }
    });
    // console.log('matchRoutes:',matchRoutes);

    Promise.all(promises).then(function(){
        // 创建仓库的时候，仓库里的数据已经有默认值
        // console.log('store.getState():',store.getState());
        let html = renderToString(
            <Provider store={store}>
                <StaticRouter context={{context}} location={req.path}>
                    <Fragment>
                        <Header/>
                        <div className="container" style={{marginTop: 70}}>
                            {routes.map(route=>{
                                return (<Route {...route} />)
                            })}
                        </div>
                    </Fragment>
                </StaticRouter>
            </Provider>
        );
        res.send(`
            <html>
                <head>
                    <title>珠峰ssr</title>
                    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css"  >
                </head>
                <body>
                    <div id="root">${html}</div>
                    <script>
                        window.context = {
                            state:${JSON.stringify(store.getState())}
                        }
                    </script>
                    <script src="/client.js"></script>
                </body>
            </html>
        `);
    });

}