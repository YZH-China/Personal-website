/**
 * 用于组织redux等
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

/**
 * 全局css文件
 */
import './stylesheets/style.css';

/**
 * 顶层组件引入
 */
import Home from './components/home/home.js';

/**
 * 引入stroe
 */
import store from './reducers/store.js';

//监听state的变化
// store.subscribe = (() => {
//     console.log(store.getState());
// })

ReactDOM.render(
    <Provider store={ store }>
         <Home />
    </Provider> ,
    document.body.appendChild(document.createElement('div'))
)