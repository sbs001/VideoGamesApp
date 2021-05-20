import { GET_PAGE, GET_DETAIL, RESTART_DETAIL, GET_GENRES } from '../actions/index.js';

const initialState = {
  actualPage: [],
  videogame: { detail: {}, ok: false },
  genres: []
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
        videogame: { detail: action.payload, ok: true }
      }
    }

    case RESTART_DETAIL: {
      return {
        ...state,
        videogame: { detail: action.payload, ok: false }
      }
    }


    default: return state;

  }
}

export default reducer;
