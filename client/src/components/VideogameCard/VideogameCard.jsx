import React from 'react';
import './VideogameCard.css';

export default function VideogameCard({props}){

    console.log('......',props)
    return(
        <div>
            <img className='a' src={props.img} alt='' />
            <h3>{props.name}</h3>
            {
                props.genres.map(genre => <li>{genre.name}</li>)
            }
        </div>
    )
}