import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import { restartDetail } from '../../store/actions/index'

export function VideogameCard(props) {

    return (
        <div>
            <img className='a' src={props.videogame.img} alt='' />
            <h3>{props.videogame.name}</h3>
            {
                props.videogame.genres.map(genre => <li>{genre.name}</li>)
            }

            <Link to={`/home/videogame/${props.videogame.id}`}>
                <button onClick={() => props.restartDetail()}>Show more</button>
            </Link>
        </div>
    )
};


export default connect(null, { restartDetail })(VideogameCard);