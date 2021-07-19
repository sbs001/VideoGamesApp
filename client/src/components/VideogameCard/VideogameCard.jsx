import React from 'react';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import altImg from '../../imgs/alt.jpg';

export default function VideogameCard(props) {
    return (
        <div className='card fadeIn'>
            <div className='ctnImg'>
                <Link to={`/home/videogame/${props.videogame.id}`}>
                    <img className='imgCard' src={props.videogame.background_image || altImg} alt='' />
                </Link>
            </div>
            <h3>{props.videogame.name}</h3>

            <div className='genresCard'>
                {props.videogame.genres.map(genre => <li>{genre.name}</li>)}
            </div>

        </div>
    )
};

