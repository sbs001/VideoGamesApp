import { GET_PAGE, GET_DETAIL, RESTART_DETAIL } from '../actions/index.js';

const initialState = {
  actualPage: [],
  videogame: {
    detail: {},
    OK: false
  }
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PAGE: {
      return {
        ...state,
        actualPage: action.payload
      }
    }

    case GET_DETAIL: {
      return {
        ...state,
        videogame: { detail: action.payload, OK: true }
      }
    }

    case RESTART_DETAIL: {
      return {
        ...state,
        videogame: { detail: {}, OK: false }
      }
    }

    default: return state;

  }
}

export default reducer;