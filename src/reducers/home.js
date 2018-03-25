import {
	INCREMENT_REQUESTED,
	INCREMENT,
	DECREMENT_REQUESTED,
	DECREMENT,
  GET_QUOTE_REQUESTED,
  GOT_QUOTE
} from '../constants/actionTypes.js';

import request from 'request';

/*
  TO BE DELETED
*/

const initialState = {
  count: 0,
  isIncrementing: false,
  isDecrementing: false,
  isFetchingQuote: false,
  quote: "",
}

export default (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT_REQUESTED:
      return {
        ...state,
        isIncrementing: true
      }

    case INCREMENT:
      return {
        ...state,
        count: state.count + 1,
        isIncrementing: !state.isIncrementing
      }

    case DECREMENT_REQUESTED:
      return {
        ...state,
        isDecrementing: true
      }

    case DECREMENT:
      return {
        ...state,
        count: state.count - 1,
        isDecrementing: !state.isDecrementing
      }

    case GET_QUOTE_REQUESTED:
      return {
        ...state,
        GET_QUOTE_REQUESTED: true
      }

    case GOT_QUOTE:
      return {
        ...state,
        quote: action.payload,
        isFetchingQuote: !state.isFetchingQuote,
      }

    default:
      return state
  }
}

export const increment = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    dispatch({
      type: INCREMENT
    })
  }
}

export const incrementAsync = () => {
  return dispatch => {
    dispatch({
      type: INCREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: INCREMENT
      })
    }, 3000)
  }
}

export const decrement = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    dispatch({
      type: DECREMENT
    })
  }
}

export const decrementAsync = () => {
  return dispatch => {
    dispatch({
      type: DECREMENT_REQUESTED
    })

    return setTimeout(() => {
      dispatch({
        type: DECREMENT
      })
    }, 3000)
  }
}

export const getQuote = () => {
  return dispatch => {
    dispatch({
      type: GET_QUOTE_REQUESTED
    })

    return request({
      url: 'https://quotes.rest/qod',
      method: 'GET',
      json: true
    }, (error, response, body) => {
      if (error) {
        console.log(error)
      } else {
        dispatch({
          type: GOT_QUOTE,
          payload: body.contents.quotes[0].quote,
        })
      }
    })
  }
}