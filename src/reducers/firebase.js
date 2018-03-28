
/*
  This is the reducer for navigating.
  Its main purpose is to:
    - update the state changes by various page navigation events (e.g. mouse clicks on links)

*/

const initialState = {
  staticDatabase:{},
  staticDatabaseLoaded: false,
  chartsDatabase:{},
  chartsDatabaseLoaded: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "INITIALISE_STATIC_DATABASE":
    	return {
    		...state,
    		staticDatabase: action.payload,
        staticDatabaseLoaded: true
    	}

    case "INITIALISE_CHARTS_DATABASE":
      return {
        ...state,
        chartsDatabase: action.payload,
        chartsDatabaseLoaded: true,
      }

    default:
      return state
  }
}