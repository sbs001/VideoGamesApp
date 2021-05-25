import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";
import { sortAscending, sortDescending, sortRatingAsc, sortRatingDes } from '../../store/actions/filterActions';
import VideogameCard from '../VideogameCard/VideogameCard';
import './Page.css';



export function Page(props) {

    const [click, setClick] = useState('false');
    useEffect(() => {
        setClick(!click)
    })

    return (
        <div className='ctnPage'>
            <div className='btns'>
                <button onClick={() => props.sortAscending(props.actualPage)}>A-Z ⮭</button>
                <button onClick={() => props.sortDescending(props.actualPage)}>Z-A ⮯</button>
                <button onClick={() => props.sortRatingAsc(props.actualPage)}>★★★★☆</button>
                <button onClick={() => props.sortRatingDes(props.actualPage)}>★☆☆☆☆</button>
                <div>Video Games APP!</div>
                <button className='i'>🡸 PREV </button>
                <button className='i'> NEXT 🡺</button>
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
        actualPage: state.actualPage
    }
};
const mapDispatchToProps = (dispatch) => {
    return {
        sortAscending: (arr) => dispatch(sortAscending(arr)),
        sortDescending: (arr) => dispatch(sortDescending(arr)),
        sortRatingAsc: (arr) => dispatch(sortRatingAsc(arr)),
        sortRatingDes: (arr) => dispatch(sortRatingDes(arr)),
    }
}



export default connect(mapStateToProps, mapDispatchToProps)(Page);

