import React from 'react';
import ReactDOM from 'react-dom';
import routes from '../routes';
import {BrowserRouter} from 'react-router-dom';
// hydrate 把服务器端渲染未完成的工作完成，，比如说绑定事件
ReactDOM.hydrate(
<BrowserRouter>
    {routes}
</BrowserRouter>
, document.getElementById('root'));