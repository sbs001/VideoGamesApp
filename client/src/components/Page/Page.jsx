import React from 'react';
import { connect } from "react-redux";
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';

export function Page(props) {

    return (
        <div>
            {props.actualPage.map(element => {
                return <VideogameCard videogame={element} />
            })
            }

        </div>
    )
};



const mapStateToProps = (state) => {
    return {
        actualPage: state.actualPage
    }
};



export default connect(mapStateToProps)(Page);

