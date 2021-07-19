import axios from 'axios';
import { RESTART_DETAIL, RESTART_PAGE, SEARCH } from '../../consts'


export const get = (url, actionType, page = 0) => {
    return function(dispatch) {
        return axios.get(url)
            .then(response => dispatch({
                type: actionType,
                payload: response.data,
                page
            }))
    }
}


export const restartDetail = () => {
    return {
        type: RESTART_DETAIL,
        payload: {}
    }
}

export const restartPage = () => {
    return {
        type: RESTART_PAGE,
        payload: {}
    }
}

export const isSearch = () => {
    return {
        type: SEARCH,
        payload: {}
    }
}