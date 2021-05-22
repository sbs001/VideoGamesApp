import { GET_PAGE, GET_DETAIL, RESTART_STATE, GET_GENRES, GET_PLATFORMS } from '../../consts';

const initialState = {
  actualPage: [],
  genres: [],
  platforms: [],
  videogame: { detail: {}, ok: false }
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

    case RESTART_STATE: {
      return {
        ...state,
        videogame: { detail: {}, ok: false }
      }
    }

    case GET_GENRES: {
      return {
        ...state,
        genres: action.payload
      }
    }

    case GET_PLATFORMS: {
      return {
        ...state,
        platforms: action.payload
      }
    }

    default: return state;

  }
}

export default reducer;
