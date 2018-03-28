import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import home from './home';
import navigation from './navigation';
import firebase from './firebase';

/*
  This is the main Reducer.
  Its main purpose is to:
    - Combine all the sub-reducers defined in the folder
*/

export default combineReducers({
	routing: routerReducer,
	home,
	navigation,
	firebase,
})