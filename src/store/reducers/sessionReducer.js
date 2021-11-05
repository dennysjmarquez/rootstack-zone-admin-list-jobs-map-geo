import { SESSION_STATE, UPDATE_PROFILE_STATE, UPDATE_SESSION_STATE } from '../actions/sessionActions';

const preInitialState = {
	state: SESSION_STATE.LogedOut,
	profile: { name: '', email: '' },
};
const sessionReducer = (state = preInitialState, action) => {
	switch (action.type) {
		case UPDATE_SESSION_STATE:
			return { ...state, state: action.payload.state };
		case UPDATE_PROFILE_STATE:
			return { ...state, profile: action.payload.profile };
		default:
			return state;
	}
};

export default sessionReducer;
