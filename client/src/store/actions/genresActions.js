import { get } from './index'
import {URL_GENRES, GET_GENRES} from '../../consts';

export const getGenres = () => {
    return get(URL_GENRES,GET_GENRES);
};