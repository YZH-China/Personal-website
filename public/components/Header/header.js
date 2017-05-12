import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

class Header extends Component {
    render() {
        return (
            <Router>
                <div className="web-header grey-bg-10">
                    <span className="web-title grey-color-3"
                        onClick = {(event) => {
                            this.props.history.push('/', '首页');
                        }}
                    >YZH-Chian的个人网站</span>
                    <div className="headerPicWarp"
                        onClick={() => {
                            this.props.history.push('/logreg', '登录注册');
                        }}
                    >
                        <img src="http://127.0.0.1:3000/images/nologin.jpg" width="100%" height="100%" alt="头像" className="head-protrait"/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default Header;