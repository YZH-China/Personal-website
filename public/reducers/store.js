import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

/**
 * 引入reducer处理函数
 */
import * as changeCount from './home_reducers.js';

const todoApp = combineReducers(changeCount);
const store = createStore(todoApp, applyMiddleware(thunk, logger));

export default store;