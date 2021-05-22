import { get } from './index'
import { URL_VIDEOGAMES_PAGE, URL_VIDEOGAMES_DETAIL, URL_VIDEOGAMES_SEARCH, GET_PAGE, GET_DETAIL } from '../../consts'


export const getVideogamePage = (page) => {
    return get(URL_VIDEOGAMES_PAGE + page, GET_PAGE)
}


export const getVideogameDetail = (id) => {
    return get(URL_VIDEOGAMES_DETAIL + id, GET_DETAIL)
}


export const searchVideogame = (name) => {
    return get(URL_VIDEOGAMES_SEARCH + name, GET_PAGE)
}