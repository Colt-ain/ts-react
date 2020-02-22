import { applyMiddleware, createStore, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer';
import { createLogger } from 'redux-logger';

const logger = createLogger({});

const middleWares = [thunk, logger];

const store = createStore(
	rootReducer,
	compose(
		applyMiddleware(...middleWares),
	),
);

export type AppDispatch = typeof store.dispatch

export default store;
