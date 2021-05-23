import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';
import play from '../../imgs/play.jpg'



export default function Home() {
    return (
        <div className='landingPage'>
            <Link to='/home'>
                <img src={play} alt='no' className='a' />
            </Link>
            <div className='ctnWellcome'>
                <div className='wellcome'>
                    <p><b>Wellcome to Videogames page !</b></p>
                </div>
            </div>
        </div>
    )
};


