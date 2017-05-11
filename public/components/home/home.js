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
import {
	changeCount
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
			<div>
				{ this.props.changeCount }
				<button type="button"
					onClick={() => {
						dispatch(changeCount(this.props.changeCount))
					}}
				>执行</button>
			</div>
		)
	}
};

const selectState = (state) => {
	console.log(state);
	return {
		changeCount: state.changeCount
	}
}

export default connect(selectState)(Home);