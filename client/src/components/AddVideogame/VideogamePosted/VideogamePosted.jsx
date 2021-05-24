import React from 'react';
import './VideogamePosted.css';
import { Link } from 'react-router-dom';

export default function ({props}) {

    
    return (
        <div className='popUp'>
            <h1>New Videogame Posted</h1>
            <h2>{props.name}</h2>
            <p>{props.description}</p>
            <h5>Realsed : {props.released}</h5>
            <h6>Rating : {props.rating}</h6>

            <div className='btn'>
            <Link to='/home'>
                <button> {'<-'} BACK</button>
            </Link>

            </div>
        </div>
    )
}

