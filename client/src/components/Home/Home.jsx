/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import { isSearch, restartDetail } from '../../store/actions/index'
import { connect } from 'react-redux';
import Menu from './Menu/Menu';
import { getGenres } from '../../store/actions/genresActions';

export function Home(props) {
    useEffect(() => {
        if(props.actualPage.isSearch)
            props.isSearch();
        else
            if (!props.actualPage.page.length) props.getVideogamePage();
        if (!props.genres.length) props.getGenres()
        props.restartDetail();
    },[])


    return (
        <div className='home' >
            <div className='imgHome'></div>
            <div className='homePage'>
                <Menu />
                <Page />
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        getVideogamePage: (page) => dispatch(getVideogamePage(page)),
        restartDetail: () => dispatch(restartDetail()),
        getGenres: () => dispatch(getGenres()),
        isSearch: () => dispatch(isSearch()),
    }
};
const mapStateToProps = (state) => {
    return {
        actualPage: state.actualPage,
        page: state.actualPage.number,
        genres: state.genres,
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Home);
