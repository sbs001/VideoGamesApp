import React from 'react';
import './VideogamePosted.css';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getVideogamePage } from '../../../store/actions/videogamesActions';

export function VideogamePosted({ props, getVideogamePage }) {


    return (
        <div className='popUp'><div className='ctnPupUp'>
            <h1>New Videogame Posted</h1>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h5>Realsed : {props.released}</h5>
            <h6>Rating : {props.rating}</h6>

            <div className='btn'>
                <Link to='/home'>
                    <button onClick={() => getVideogamePage()}> ⮨ BACK</button>
                </Link>

            </div>
        </div></div>
    )
}


export default connect(null, { getVideogamePage })(VideogamePosted)
