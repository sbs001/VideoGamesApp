import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import { restartStatus } from '../../store/actions/index'
import altImg from '../../imgs/alt.jpg';

export function VideogameCard(props) {
    return (
        <div className='card'>
            <div className='ctnImg'>
                <Link to={`/home/videogame/${props.videogame.id}`}>
                    <img className='imgCard' src={props.videogame.background_image || altImg} alt='NOT IMAGE' />
                </Link>
            </div>
            <h3>{props.videogame.name}</h3>

            <div className='genresCard'>
                {props.videogame.genres.map(genre => <li>{genre.name}</li>)}
            </div>

        </div>
    )
};


export default connect(null, { restartStatus })(VideogameCard);