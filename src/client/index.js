import React, {Fragment} from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import {BrowserRouter} from 'react-router-dom';
import Header from '../components/Header';
import {Provider} from 'react-redux';
import {getClientStore} from '../store';
// hydrate 把服务器端渲染未完成的工作完成，，比如说绑定事件
ReactDOM.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
            <Fragment>
                <Header/>
                <div className="container" style={{marginTop: 70}}>
                    {routes}
                </div>
            </Fragment>
        </BrowserRouter>
    </Provider>
, document.getElementById('root'));