import {
    ADD_COUNT,
    RED_COUNT
} from '../actions/home_action.js';

export const changeCount = (state = 0, action) => {
    console.log(action);
    switch (action.type) {
        case ADD_COUNT:
            return ++state;
        case RED_COUNT:
            return --state;
        default:
            return state;
    }
}