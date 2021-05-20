import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions/index'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';


export function Home(props) {

    useEffect(() => {
        props.getVideogamePage(1);
    }, [])



    return (
        <div>
            <h1>Henry Videogames!</h1>
            <Link to='/home/add'>
                <button>ADD</button>
            </Link>
            <Page />
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        getVideogamePage: (page) => dispatch(getVideogamePage(page)),
    }
};



export default connect(null, mapDispatchToProps)(Home);
