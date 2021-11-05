import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import rootReducer from './rootReducer';

export function initializeStore() {
	return createStore(rootReducer, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
