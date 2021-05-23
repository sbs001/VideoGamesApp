import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import { restartStatus } from '../../store/actions/index'

export function VideogameCard(props) {
    return (
        <div className='card'>
            <div className='ctnImg'>
                <img className='imgCard' src={props.videogame.background_image} alt='' />
            </div>
            <h3>{props.videogame.name}</h3>

            <div className='genresCard'>
                {props.videogame.genres.map(genre => <li>{genre.name}</li>)}
            </div>

            <Link to={`/home/videogame/${props.videogame.id}`}>
                <button onClick={() => props.restartStatus()}>Show more</button>
            </Link>
        </div>
    )
};


export default connect(null, { restartStatus })(VideogameCard);