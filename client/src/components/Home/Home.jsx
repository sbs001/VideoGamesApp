import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Menu from './Menu/Menu';

export function Home(props) {

    useEffect(() => {
        props.getVideogamePage(1);
    }, [])



    return (
        <div className='home' onScroll={(e) => console.log(e)}>
            <div className='imgHome'>
                <Link to='/home/add'>
                    <button>ADD</button>
                </Link>
            </div>

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
    }
};



export default connect(null, mapDispatchToProps)(Home);
