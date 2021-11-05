import { combineReducers } from 'redux';
import sessionReducer from './reducers/sessionReducer';
import pageLoadingReducer from './reducers/pageLoadingReducer';
import jobsReducer from './reducers/jobsReducer';

export default combineReducers({ session: sessionReducer, pageLoading: pageLoadingReducer, jobs: jobsReducer });
