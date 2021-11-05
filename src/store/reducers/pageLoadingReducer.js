import { FETCH_END, FETCH_START } from '../actions/pageLoadingActions';

const preInitialState = {
	loadingIds: [],
};
const pageLoadingReducer = (state = preInitialState, action) => {
	switch (action.type) {
		case FETCH_START:
			return { loadingIds: [...state.loadingIds, action.payload.id] };
		case FETCH_END:
			return { loadingIds: state.loadingIds.filter((id) => id !== action.payload.id) };
		default:
			return state;
	}
};

export default pageLoadingReducer;
