import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import {BrowserRouter,Route} from 'react-router-dom';
import Header from '../components/Header';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
import Home from '../containers/Home';
import {renderRoutes,matchRoutes} from 'react-router-config';
// hydrate 把服务器端渲染未完成的工作完成，，比如说绑定事件
const store = getClientStore();
ReactDOM.hydrate(
    <Provider store={store}>
        <BrowserRouter>
           {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));