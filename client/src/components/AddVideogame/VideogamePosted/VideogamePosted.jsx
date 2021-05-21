import React from 'react';
import './VideogamePosted.css';
import { Link } from 'react-router-dom';

export default function ({props}) {


    return (
        <div className='popUp'>
            <h1>New Videogame Posted</h1>
            <h3>{props.name}</h3>
            <p>{props.description}</p>
            <h5>{props.released}</h5>
            <h6>Rating : {props.rating}</h6>

            <Link to='/home'>
                <button> {'<--'} BACK</button>
            </Link>
        </div>
    )
}

