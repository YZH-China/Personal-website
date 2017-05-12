/**
 * 用于组织redux等
 */

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Prompt,
	Switch
} from 'react-router-dom';

/**
 * css文件
 */
import './stylesheets/style.css';
import './stylesheets/bgcolors.css';
import './stylesheets/header.css'; //顶部header样式表

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
        <Router>
            <Route exact path="/dist/index.html" component={Home} />
        </Router>
    </Provider> ,
    document.body.appendChild(document.createElement('div'))
)