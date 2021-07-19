import React, { useState } from 'react';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import { restartPage } from '../../store/actions';
import { sortAscending, sortDescending, sortRatingAsc, sortRatingDes } from '../../store/actions/filterActions';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import Spiner from '../Spiner/Spiner';
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';



export function Page(props) {

    const [click, setClick] = useState('false');


    const handleChangePages = (e) => {
        props.restartPage();
        if (e.target.name === 'next') return props.getVideogamePage(props.page + 1);
        if (e.target.name === 'prev') return props.getVideogamePage(props.page + -1);
        return props.getVideogamePage();
    }

    const handleClick = (e) => {
        setClick(!click);
        props[e.target.name](props.actualPage)
    }

    if ((!props.actualPage.length) && (props.page === 0)) return (
        <div className='ctnPage'><div className='noVG'>
            <h1>No video games added...</h1>
            <Link to='./home/add'><button>ADD NEW VIDEO GAME</button></Link>
        </div></div>
    )
    return (
        <div className='ctnPage fadeInFast'>
            <div className='btns'>
                <button id='x' name='x' onClick={handleChangePages} >❎</button>
                <button name='sortAscending' onClick={handleClick}>A-Z ⮭</button>
                <button name='sortDescending' onClick={handleClick}>Z-A ⮯</button>
                <button name='sortRatingAsc' onClick={handleClick}>★★★★☆</button>
                <button name='sortRatingDes' onClick={handleClick}>★☆☆☆☆</button>

                <div>🎮 Video Games APP!</div>

                <button className='i' name='prev' disabled={props.page < 2} onClick={handleChangePages} >  🡸 PREV</button>
                <span><b>{props.page}</b></span>
                <button className='i' name='next' disabled={props.page === 0} onClick={handleChangePages}> NEXT 🡺</button>
            </div>
            <div className='page'>

                {
                    props.actualPage.length ?
                        
                            props.actualPage.map(element => {
                                return (
                                    <div className='cards fadeInSlow'>
                                        <VideogameCard videogame={element} />
                                    </div>)
                            })
                         :
                        <Spiner />
                }
            </div>
        </div>
    )

}



const mapStateToProps = (state) => {
    return {
        actualPage: state.actualPage.page,
        page: state.actualPage.number,
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        restartPage: () => dispatch(restartPage()),
        getVideogamePage: (page) => dispatch(getVideogamePage(page)),
        sortAscending: (arr) => dispatch(sortAscending(arr)),
        sortDescending: (arr) => dispatch(sortDescending(arr)),
        sortRatingAsc: (arr) => dispatch(sortRatingAsc(arr)),
        sortRatingDes: (arr) => dispatch(sortRatingDes(arr)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Page);

