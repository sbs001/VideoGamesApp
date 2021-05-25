import React, { useState } from 'react';
import './Menu.css';
import img from '../../../imgs/gamer-zone.jpg';


export function Menu(props) {

    const [side, setSide] = useState(false);

    return (
        <div className='menu'>
            <div className='options'>
                <a href='home/add'>Add new video game</a><br />
                <button className='aa'>Web video games</button>
                <button>My video games</button>
                <button onClick={(e) => setSide(!side)} >By genres ▼ </button>
                {side ? <p>sadda</p> : null}

            </div>
            <img src={img} />
        </div>
    )
};

export default Menu;