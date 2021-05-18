import React, { useEffect } from 'react';
import Page from '../Page/Page';
import './Home.css';
import { getPageVideogames } from '../../store/actions'
import { connect } from 'react-redux';


export function Home(props) {

    useEffect(() => {
        props.getPageVideogames(1)
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
        getPageVideogames: (page) => dispatch(getPageVideogames(page))
    }
};

export default connect(null, mapDispatchToProps)(Home);
