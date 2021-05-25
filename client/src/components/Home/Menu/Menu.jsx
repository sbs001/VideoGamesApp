import React, { useState } from 'react';
import './Menu.css';
import img from '../../../imgs/gamer-zone.jpg';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { getMyVideogames, getVideogameByGenre, getWebVideogames } from '../../../store/actions/videogamesActions';


export function Menu(props) {

    const [side, setSide] = useState(false);

    const handleGenreClick = (e) => { console.log('click'); props.getVideogameByGenre(e.target.id) };

    const handleClick = (e) => {
        (e.target.name === 'web') ? props.getWebVideogames() : props.getMyVideogames()
    };

    return (
        <div className='menu'>
            <div className='options'>
                <Link to='home/add'>Add new video game</Link><br />

                <button className='btnOp' name='web' onClick={handleClick}>Web video games</button>

                <button className='btnOp' name='added' onClick={handleClick}>My video games</button>

                <button className='btnOp' onClick={(e) => setSide(!side)} >By genres ▼ </button>
            {!side ? null : props.genres.map(e => <button className='btnMenu' id={e.id} onClick={handleGenreClick}>{e.name}</button>)}
            </div>
            <img src={img} alt='' />
        </div>
    )
};

const mapStateToProps = (state) => {
    return {
        genres: state.genres,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getVideogameByGenre: (id) => dispatch(getVideogameByGenre(id)),
        getMyVideogames: () => dispatch(getMyVideogames()),
        getWebVideogames: (page) => dispatch(getWebVideogames(page))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);