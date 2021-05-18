import { GET_PAGE } from '../actions/index.js';

const initialState = {
  actualPage: [],
  videogameDetail: {}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_PAGE: {
      return {
        ...state,
        actualPage: action.payload
      }
    }
    default: return state;

  }
}

export default reducer;
