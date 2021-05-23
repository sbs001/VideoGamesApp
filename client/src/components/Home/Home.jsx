import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

export function Home(props) {

    useEffect(() => {
        props.getVideogamePage(1);
    }, [])



    return (
        <div className='home'>
            <div className='imgHome'>
                <h1>Henry Videogames!</h1>
                <Link to='/home/add'>
                    <button>ADD</button>
                </Link>
            </div>

            <div className='homePage'>
                <div className='filter'>
                    <a href="#about">About</a>
                    <a href="#services">Services</a>
                    <a href="#clients">Clients</a>
                    <a href="#contact">Contact</a>
                </div>
                <Page />
            </div>
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        getVideogamePage: (page) => dispatch(getVideogamePage(page)),
    }
};



export default connect(null, mapDispatchToProps)(Home);
