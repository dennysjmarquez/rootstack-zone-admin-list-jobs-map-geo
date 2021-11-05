import {JOBS_CLEAR_DATA, JOBS_DATA_READY, JOBS_UPDATE_DATA} from '../actions/jobsActions';

const preInitialState = {
  data: [],
  nextPageUrl: null,
  prevPageUrl: null,
  currentPage: 0,
  perPage: 0,
  total: 0,
  to: 0,
  loading: false,
};
const jobsReducer = (state = preInitialState, action) => {
  switch (action.type) {
    case JOBS_DATA_READY:
      return {...state, loading: action.payload.loading};
    case JOBS_UPDATE_DATA:
      return {...state, ...action.payload.data};
    case JOBS_CLEAR_DATA:
      return {...state, data: preInitialState.data};
    default:
      return state;
  }
};

export default jobsReducer;
