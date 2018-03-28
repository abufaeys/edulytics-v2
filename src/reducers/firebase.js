import {
  FETCHING_STATIC_DATABASE,
  FETCHED_STATIC_DATABASE,
  FETCHING_STATIC_DATABASE_ERROR,
  FETCHING_CHARTS_DATABASE,
  FETCHED_CHARTS_DATABASE,
  FETCHING_CHARTS_DATABASE_ERROR,
} from '../constants/actionTypes.js';
import firebase from 'firebase';



/*
  This is the reducer for navigating.
  Its main purpose is to:
    - update the state changes by various page navigation events (e.g. mouse clicks on links)

*/
const config = {
  apiKey: "AIzaSyC1r8Jm7C_3Q_cAAY0cGP2-lydfL8SK130",
  authDomain: "edulytics-437a6.firebaseapp.com",
  databaseURL: "https://edulytics-437a6.firebaseio.com",
  projectId: "edulytics-437a6",
  storageBucket: "edulytics-437a6.appspot.com",
  messagingSenderId: "631017845483"
};
firebase.initializeApp(config);
var db = firebase.database();

const initialState = {
  staticDatabase:{},
  fetchStaticDatabaseStatus: "IDLE",
  chartsDatabase:{},
  fetchChartsDatabaseStatus: "IDLE",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_STATIC_DATABASE:
    	return {
    		...state,
    		fetchStaticDatabaseStatus: "FETCHING",
    	}

    case FETCHED_STATIC_DATABASE:
      return {
        ...state,
        staticDatabase: action.payload,
        fetchStaticDatabaseStatus: "FETCHED"
      }

    case FETCHING_STATIC_DATABASE_ERROR:
      return {
        ...state,
        fetchStaticDatabaseStatus: "ERROR"
      }

    case FETCHING_CHARTS_DATABASE:
      return {
        ...state,
        fetchChartsDatabaseStatus: "FETCHING",
      }

    case FETCHED_CHARTS_DATABASE:
      return {
        ...state,
        chartsDatabase: action.payload,
        fetchChartsDatabaseStatus: "FETCHED"
      }

    case FETCHING_CHARTS_DATABASE_ERROR:
      return {
        ...state,
        fetchChartsDatabaseStatus: "ERROR"
      }

    default:
      return state
  }
}

export const initialiseDatabases = () => {
  return dispatch => {
    dispatch({
      type: FETCHING_STATIC_DATABASE
    });
    dispatch({
      type: FETCHING_CHARTS_DATABASE
    });

    db.ref("/Static").on("value", data => {
      if (data.val()) {
        dispatch({
          type: FETCHED_STATIC_DATABASE, 
          payload: data.val()
        });
      } else {
        dispatch({
          type: FETCHING_STATIC_DATABASE_ERROR
        })
      }
    });

    db.ref("/Charts").on("value", data => {
      if (data.val()) {
        dispatch({
          type: FETCHED_CHARTS_DATABASE, 
          payload: data.val()
        });
      } else {
        dispatch({
          type: FETCHING_CHARTS_DATABASE_ERROR
        })
      }
    });
  }
}