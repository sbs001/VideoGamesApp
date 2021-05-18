import React from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';

export function Page(props) {
    console.log('-----', props.actualPage[0])

    return (
        <div>
            {props.actualPage.map(element => {
                return <VideogameCard props={element} />
            })
            }

        </div>
    )
};



const mapStateToProps = (status) => {
    return {
        actualPage: status.actualPage
    }
};



export default connect(mapStateToProps)(Page);

