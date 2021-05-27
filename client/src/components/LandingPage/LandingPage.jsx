import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import start from '../../imgs/start.png'



export default function Home() {
    return (
        <div className='landingPage'>
            <Link to='/home'>
                <img src={start} alt='no' className='start' />
            </Link>
          
        </div>
    )
};


