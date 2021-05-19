import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './VideogameCard.css';
import { restartDetail } from '../../store/actions/index'

export function VideogameCard({ props }) {

    return (
        <div>
            <img className='a' src={props.img} alt='' />
            <h3>{props.name}</h3>
            {
                props.genres.map(genre => <li>{genre.name}</li>)
            }

            <Link to={`/home/videogame/${props.id}`}>
                <button onClick={restartDetail()}>Show more</button>
            </Link>
        </div>
    )
};


export default connect(null, { restartDetail })(VideogameCard);