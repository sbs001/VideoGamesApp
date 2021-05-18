import React from 'react';
import { Link } from 'react-router-dom';
import './LandingPage.css';


export default function Home() {
    return (
        <div>
            <Link to='/home'>
                <button>GO HOME!</button>
            </Link>
        </div>
    )
};


