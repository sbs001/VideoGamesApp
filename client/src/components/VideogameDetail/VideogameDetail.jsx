import React, { useEffect } from 'react';
import { getVideogameDetail } from '../../store/actions'
import { connect } from 'react-redux';
import './VideogameDetail.css';
import { Link } from 'react-router-dom';


export function VideogameDetail(props) {

    useEffect(() => {
        props.getVideogameDetail(parseInt(props.match.params.id));
    }, [])

    if(!props.videogame) return <div>loading</div>
    return (
        <div>
            <img className='a' src={props.videogame.background_image} alt='' />
            <img className='a' src={props.videogame.background_image_additional} alt='' />
            <h3>{props.videogame.name}</h3>
            {
                props.videogame.genres.map(genre => <li>{genre.name}</li>)
            }
            {props.videogame.description}
            <p>{props.videogame.rating}</p>
            <p>{props.videogame.released}</p>
            {
                props.videogame.platforms.map(e => <li>{e.platform.name}</li>)
            }

            <Link to='/home'>
                <button>Home</button>
            </Link>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        videogame: state.videogameDetail
    }
};

export default connect(mapStateToProps, { getVideogameDetail })(VideogameDetail)