import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import { restartStatus } from '../../store/actions/index'

export function VideogameCard(props) {
    return (
        <div>
            {console.log(props)}
            <img className='a' src={props.videogame.background_image} alt='' />
            <h3>{props.videogame.name}</h3>
            {
                props.videogame.genres.map(genre => <li>{genre.name}</li>)
            }

            <Link to={`/home/videogame/${props.videogame.id}`}>
                <button onClick={() => props.restartStatus()}>Show more</button>
            </Link>
        </div>
    )
};


export default connect(null, { restartStatus })(VideogameCard);