import axios from 'axios';
export const GET_PAGE = 'GET_PAGE';
export const GET_DETAIL = 'GET_DETAIL';
export const RESTART_DETAIL = 'RESTART_DETAIL';
export const GET_GENRES = 'GET_GENRES';


export const getVideogamePage = (page) => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
            .then(response => dispatch({
                type: GET_PAGE,
                payload: response.data
            }))

    }
}



export const getVideogameDetail = (id) => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/videogames/${id}`)
            .then(response => dispatch({
                type: GET_DETAIL,
                payload: response.data
            }))
    }
}


export const restartDetail = () => {
    return {
        type: RESTART_DETAIL,
        payload: {}
    }
}



export const getGenres = () => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/genres`)
            .then(response => dispatch({
                type: GET_GENRES,
                payload: response.data
            }))
    }
};
