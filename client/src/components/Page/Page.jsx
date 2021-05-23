import React from 'react';
import { connect } from "react-redux";
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';

export function Page(props) {

    return (
        <div className='page'>
            { props.actualPage.map(element => {
                return (
                    <div className='cards'>
                        <VideogameCard videogame={element}  />
                    </div>)
            })}
        </div>
    )

}



const mapStateToProps = (state) => {
    return {
        actualPage: state.actualPage
    }
};



export default connect(mapStateToProps)(Page);

