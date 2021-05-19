import axios from 'axios';
export const GET_PAGE = 'GET_PAGE';
export const GET_DETAIL = 'GET_DETAIL';
export const RESTART_DETAIL = 'RESTART_DETAIL';

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
        type : RESTART_DETAIL
    }
}

export const toInProgress = (payload) => {
    return {
        type: 'ToInProgress',
        payload
    }
}

export const toDone = (payload) => {
    return {
        type: 'ToDone',
        payload
    }
}