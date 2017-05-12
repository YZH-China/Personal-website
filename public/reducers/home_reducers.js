import {
	CUR_COUNT
} from '../actions/home_action.js';

export const changeCount = (state = 0, action) => {
	console.log(action);
	switch(action.type){
		case CUR_COUNT:
			return ++state
		default:
			return state;
	}
}