import axios from 'axios';
import { RESTART_DETAIL } from '../../consts'


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


export const restartStatus = () => {
    return {
        type: RESTART_DETAIL,
        payload: {}
    }
}