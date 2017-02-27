import { FETCH_SETS, FETCH_SET, CREATE_TERM, DELETE_TERM } from '../actions/index';

const INITIAL_STATE = { all: [], set: null };

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
  case FETCH_SET:
    return { ...state, set: action.payload.data };
  case FETCH_SETS:
    return { ...state, all: action.payload.data };
  case CREATE_TERM:
    return { ...state, set: action.payload.data };
  case DELETE_TERM:
    return { ...state, set: action.payload.data };
  default:
    return state;
  }
}
