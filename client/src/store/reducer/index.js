import { GET_PAGE, GET_DETAIL, RESTART_DETAIL, GET_GENRES, GET_PLATFORMS, SORT_PAGE } from '../../consts';

const initialState = {
    actualPage: { page: [], number: null },
    genres: [],
    platforms: [],
    videogame: { detail: {}, ok: false }
};

const reducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_PAGE:
            {
                return {
                    ...state,
                    actualPage: { page: action.payload, number: action.page }
                }
            }

        case GET_DETAIL:
            {
                return {
                    ...state,
                    videogame: { detail: action.payload, ok: true }
                }
            }

        case RESTART_DETAIL:
            {
                return {
                    ...state,
                    videogame: { detail: {}, ok: false }
                }
            }

        case GET_GENRES:
            {
                return {
                    ...state,
                    genres: action.payload
                }
            }

        case GET_PLATFORMS:
            {
                return {
                    ...state,
                    platforms: action.payload
                }
            }
        case SORT_PAGE:
            {
                return {
                    ...state,
                    actualPage: {...state.actualPage, page: action.payload }
                }
            }

        default:
            return state;

    }
}

export default reducer;