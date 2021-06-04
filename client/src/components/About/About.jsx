import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../imgs/problemas_tecnicos.jpg';

export default function About() {

    return (
        <div>
            <br /> <br /><br /> <br /><br /> <br />
            <Link to='/home'>
                <img  src={img} alt='' />
            </Link>

        </div>
    )

};