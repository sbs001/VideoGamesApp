import { GET_PAGE, GET_DETAIL, RESTART_DETAIL, GET_GENRES, GET_PLATFORMS, SORT_PAGE, RESTART_PAGE, SEARCH } from '../../consts';

const initialState = {
    actualPage: { page: [], number: null, isSearch: false },
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
        case SEARCH:
            {
                return {
                    ...state,
                    actualPage: {...state.actualPage, isSearch: !state.actualPage.isSeach },
                }
            }

        case RESTART_PAGE:
            {
                return {
                    ...state,
                    actualPage: { page: [], number: null }
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