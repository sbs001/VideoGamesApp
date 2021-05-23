import React from 'react';
import './Menu.css';

export function Menu(props) {

    return (
        <div className='menu'>
            <div className='options'>
                <a >Add</a>
                <a >Order by</a>
                <a>A-Z</a>
                <a>Z-A</a>
                <a >Filter by</a>
                <a>Genres</a>
                <a>My video games</a>
                <a>Web video games</a>

            </div>
        </div>
    )
};

export default Menu;