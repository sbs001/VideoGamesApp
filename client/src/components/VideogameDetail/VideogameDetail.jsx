import React, { useEffect } from 'react';
import { getVideogameDetail } from '../../store/actions/videogamesActions'
import { connect } from 'react-redux';
import './VideogameDetail.css';
import { Link } from 'react-router-dom';


export function VideogameDetail(props) {

    useEffect(() => {
        props.getVideogameDetail(props.match.params.id);
    }, [])

    if (!props.isOK) return <h1 className='detail'><strong>loading...</strong></h1>
    return (
        <div className='detail'>
            <div className='back'>

                <div className='div1'>
                    <img className='imgDetail' src={props.videogame.background_image} alt='' />
                    <div className='div1-1'>
                        <h1>{props.videogame.name}</h1>
                        <div className='info'>
                            <div className='list'>
                            <span>Genres:</span>
                                {props.videogame.genres.map(genre => <li>{genre.name}</li>)}
                            </div>
                            <div className='p'>
                                <p>Rating: {props.videogame.rating}</p>
                                <p>Released Date: {props.videogame.released}</p>
                            </div>
                            <div className='list'>
                            <span>Platforms:</span>
                                {props.videogame.platforms.map(e => e.name ? <li>{e.name}</li> : <li>{e.platform.name}</li>)}
                            </div>

                        </div>
                    </div>
                </div>

                <div className='div2'>

                    <div className='description' dangerouslySetInnerHTML={{ __html: props.videogame.description }} />
                    <img className='imgDetail' src={props.videogame.background_image_additional} alt='' />
                </div>

                <div className='div3'>
                    <Link to='/home'>
                        <button> ⮨ Back</button>
                    </Link>
                </div>

            </div>
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

