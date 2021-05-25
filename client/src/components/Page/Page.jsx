import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { sortAscending, sortDescending, sortRatingAsc, sortRatingDes } from '../../store/actions/filterActions';
import { getVideogamePage } from '../../store/actions/videogamesActions'
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';



export function Page(props) {

    const [click, setClick] = useState('false');


    const handleChangePages = (e) => {
        if (e.target.name === 'next') return props.getVideogamePage(props.page + 1);
        if (e.target.name === 'prev') return props.getVideogamePage(props.page + -1);
        return props.getVideogamePage();
    }

    const handleClick = (e) => {
        setClick(!click);
        props[e.target.name](props.actualPage)
    }

    return (
        <div className='ctnPage'>
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
                {props.actualPage.map(element => {
                    return (
                        <div className='cards'>
                            <VideogameCard videogame={element} />
                        </div>)
                })}
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
        getVideogamePage: (page) => dispatch(getVideogamePage(page)),
        sortAscending: (arr) => dispatch(sortAscending(arr)),
        sortDescending: (arr) => dispatch(sortDescending(arr)),
        sortRatingAsc: (arr) => dispatch(sortRatingAsc(arr)),
        sortRatingDes: (arr) => dispatch(sortRatingDes(arr)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Page);

