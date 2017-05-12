/**
 * 第一个有状态组件
 */
import React from 'react';
import { connect } from 'react-redux';
import {
	BrowserRouter as Router,
	Route,
	Link,
	Redirect,
	withRouter,
	Prompt,
	Switch
} from 'react-router-dom';
//引入子模块
import Header from '../Header/header.js';
import Logreg from '../LogReg/Logreg.js';
//引入action
import {
	addCount, redCount
} from '../../actions/home_action.js';

class Home extends React.Component {
	constructor(props){
		super(props);
		this.displayName = 'Home';
	}

	render() {
		const { dispatch } = this.props;
		console.log(this.props);
		return (
			<Router>
				<div className="homeBox">
					<Route component={Header} />
					<Route path="/logreg" component={Logreg} />
				</div>
			</Router>
		)
	}
};

const selectState = (state) => {
	return {
		changeCount: state.changeCount
	}
}

export default withRouter(connect(selectState)(Home));