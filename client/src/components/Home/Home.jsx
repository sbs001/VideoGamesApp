import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import { restartStatus } from '../../store/actions/index'

import { connect } from 'react-redux';
import Menu from './Menu/Menu';

export function Home(props) {

    useEffect(() => {

        props.getVideogamePage(1);
        props.restartStatus();
    }, [])



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
        restartStatus: () => dispatch(restartStatus())
    }
};



export default connect(null, mapDispatchToProps)(Home);
