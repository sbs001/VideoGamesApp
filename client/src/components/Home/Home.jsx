import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getVideogamePage } from '../../store/actions'
import { connect } from 'react-redux';


export function Home(props) {

    useEffect(() => {
        props.getVideogamePage(1)
    }, [])

    // let actualPage = 1;
    // props.getPageVideogames(actualPage);

    return (
        <div>
            <h1>Henry Videogames!</h1>

            <Page />
        </div>
    )
};


const mapDispatchToProps = (dispatch) => {
    return {
        getVideogamePage: (page) => dispatch(getVideogamePage(page))
    }
};

export default connect(null, mapDispatchToProps)(Home);
