import React from 'react';
import {StaticRouter,matchPath,Route} from 'react-router-dom';
import {renderRoutes,matchRoutes} from 'react-router-config';
import {renderToString} from 'react-dom/server';
import routes from '../routes';
import {Provider} from 'react-redux';
import {getServerStore} from '../store';
export default function (req, res) {
    // csses 手机每一个组件引入的样式
    let context = {csses: []};
    let store = getServerStore(req);
    // 获取要渲染的组件,matchPath是路由提供的工具方法，可以用来判断路径和路由对象是否匹配
    // 正则 /api/:id/
    // console.log('routes:',routes);
    // 这个方法可以处理嵌套路由，
    let matchedRoutes = matchRoutes(routes,req.path);
    console.log('matchedRoutes:',matchedRoutes);
    let promises = [];
    // 不管每个的成功和失败，都变成成功就可以
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            // promises.push(item.route.loadData(store));
            promises.push(new Promise(function(resolve){
                return item.route.loadData(store).then(resolve,resolve);
            }));
        }
    });

    Promise.all(promises).then(function(){
        // 创建仓库的时候，仓库里的数据已经有默认值
        // console.log('store.getState():',store.getState());
        let html = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.path}>
                    {renderRoutes(routes)} 
                </StaticRouter>
            </Provider>
        );
        console.log('context=====:',context);
        let cssStr = context.csses.join('\n');
        if (context.action == 'REPLACE') {
            return res.redirect(302,context.url);
            // res.statusCode = 302;
        } else if (context.notFound) {
            res.statusCode = 404;
        }
        console.log('store:',store.getState());
        res.send(`
            <html>
                <head>
                    <title>珠峰ssr</title>
                    <style>${cssStr}</style>
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
    },(data)=>{
        console.log('reject',data);
    });

}