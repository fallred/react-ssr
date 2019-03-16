import React from 'react';
import ReactDOM from 'react-dom';
import Counter from '../containers/Counter';
// hydrate 把服务器端渲染未完成的工作完成，，比如说绑定事件
ReactDOM.hydrate(<Counter />, document.getElementById('root'));