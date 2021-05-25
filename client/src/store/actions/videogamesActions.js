import {get } from './index'
import { URL_VIDEOGAMES_PAGE, URL_VIDEOGAMES_DETAIL, URL_VIDEOGAMES_SEARCH, GET_PAGE, GET_DETAIL, URL_VIDEOGAMES_BY_GENRE, URL_VIDEOGAMES_ADDED, URL_VIDEOGAMES_DEF } from '../../consts'


export const getVideogamePage = (page = 1) => {
    return get(URL_VIDEOGAMES_PAGE + page, GET_PAGE, page)
}


export const getVideogameDetail = (id) => {
    return get(URL_VIDEOGAMES_DETAIL + id, GET_DETAIL)
}


export const searchVideogame = (name) => {
    return get(URL_VIDEOGAMES_SEARCH + name, GET_PAGE)
}

export const getVideogameByGenre = (genreId) => {
    return get(URL_VIDEOGAMES_BY_GENRE + genreId, GET_PAGE);
}

export const getMyVideogames = () => {
    return get(URL_VIDEOGAMES_ADDED, GET_PAGE)
}

export const getWebVideogames = (page = 1) => {
    return get(URL_VIDEOGAMES_DEF, GET_PAGE, page)
}