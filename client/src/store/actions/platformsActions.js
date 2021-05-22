import { get } from './index'
import {URL_PLATFORMS, GET_PLATFORMS} from '../../consts';

export const getPlatforms = () => {
    return get(URL_PLATFORMS,GET_PLATFORMS);
};