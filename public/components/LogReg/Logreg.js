import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Route,
    Link
} from 'react-router-dom';
import Login from './Login.js';
import Register from './Register.js'

class Logreg extends Component {
    render() {
        return (
            <Router>
                <div className="logreg">
                    <div className="logreg-nav">
                        <Link to="/logreg/login">登录</Link>
                        <Link to="/logreg/register">注册</Link>
                    </div>
                    <Route path="/logreg/login" component={Login}></Route>
                    <Route path="/logreg/register" component={Register}></Route>
                </div>
            </Router>
        );
    }
}

export default Logreg;