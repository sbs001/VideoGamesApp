import axios from 'axios';
export const GET_PAGE = 'GET_PAGE';

export const getPageVideogames = (page) => {
    return function (dispatch) {
        return axios.get(`http://localhost:3001/videogames?page=${page}`)
            .then(response => dispatch({
                type: GET_PAGE,
                payload: response.data
            }))
            
    }
}



export const getVideogame = (payload) => {
    return {
        type: 'RemoveTodo',
        payload
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