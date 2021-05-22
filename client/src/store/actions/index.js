import axios from 'axios';
import { RESTART_STATE } from '../../consts'


export const get = (url, actionType) => {
    return function (dispatch) {
        return axios.get(url)
            .then(response => dispatch({
                type: actionType,
                payload: response.data
            }))
    }
}


export const restartStatus = () => {
    return {
        type: RESTART_STATE,
        payload: {}
    }
}



