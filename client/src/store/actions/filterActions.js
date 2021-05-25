import { SORT_PAGE } from "../../consts"

export const sortAscending = (arr) => {
    return {
        type: SORT_PAGE,
        payload: arr.sort(function(a, b) {
            if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
            return 0;
        })
    };
}
export const sortDescending = (arr) => {
    return {
        type: SORT_PAGE,
        payload: arr.sort(function(a, b) {
            if (a.name.toUpperCase() < b.name.toUpperCase()) return 1;
            if (a.name.toUpperCase() > b.name.toUpperCase()) return -1;
            return 0;
        })
    };
}


export const sortRatingAsc = (arr) => {
    return {
        type: SORT_PAGE,
        payload: arr.sort(function(a, b) {
            if (a.rating < b.rating) return 1;
            if (a.rating > b.rating) return -1;
            return 0;
        })
    };
}



export const sortRatingDes = (arr) => {
    return {
        type: SORT_PAGE,
        payload: arr.sort(function(a, b) {
            if (a.rating > b.rating) return 1;
            if (a.rating < b.rating) return -1;
            return 0;
        })
    };
}