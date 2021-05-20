import React, { useEffect } from 'react';
import { getVideogameDetail } from '../../store/actions/index'
import { connect } from 'react-redux';
import './VideogameDetail.css';
import { Link } from 'react-router-dom';


export function VideogameDetail(props) {
    
    useEffect(() => {
        props.getVideogameDetail(parseInt(props.match.params.id));
    }, [])

    if (!props.isOK) return <h1><strong>loading...</strong></h1>
    return (
        <div>
            <img className='a' src={props.videogame.background_image} alt='' />
            <img className='a' src={props.videogame.background_image_additional} alt='' />
            <h3>{props.videogame.name}</h3>
            {
                props.videogame.genres.map(genre => <li>{genre.name}</li>)
            }

            <div dangerouslySetInnerHTML={{ __html: props.videogame.description }} />

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
        videogame: state.videogame.detail,
        isOK: state.videogame.ok
    }
};

export default connect(mapStateToProps, { getVideogameDetail })(VideogameDetail)