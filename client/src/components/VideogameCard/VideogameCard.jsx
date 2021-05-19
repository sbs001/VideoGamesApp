import React from 'react';
import { Link } from 'react-router-dom';
import './VideogameCard.css';

export default function VideogameCard({props}){

    return(
        <div>
            <img className='a' src={props.img} alt='' />
            <h3>{props.name}</h3>
            {
                props.genres.map(genre => <li>{genre.name}</li>)
            }

            <Link to={`/home/videogame/${props.id}`}>
                <button>Show more</button>
            </Link>
        </div>
    )
}