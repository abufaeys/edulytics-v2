import {
	TOGGLE_ACTIVE_USER
} from '../constants/actionTypes.js';

/*
  This is the reducer for navigating.
  Its main purpose is to:
    - update the state changes by various page navigation events (e.g. mouse clicks on links)

*/

const initialState = {
  currentActiveUser : 'System Administrator',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_ACTIVE_USER:
    	return {
    		...state,
    		currentActiveUser: action.payload
    	}

    default:
      return state
  }
}

export const toggleActiveUser = (user) => {
  return dispatch => {
    dispatch({
      type: TOGGLE_ACTIVE_USER,
      payload: user
    })
  }
}
