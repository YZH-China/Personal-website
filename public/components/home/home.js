/**
 * 第一个有状态组件
 */

import React from 'react';
import { Link } from 'react-router-dom';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.displayName = 'Home';
        this.state = {};
    }

    render() {
        return (
            <ul className="componentNav">
                <li><Link to="/picture">图片</Link></li>
                <li><Link to="/article">文章</Link></li>
            </ul>
        )
    }
};

export default Home;