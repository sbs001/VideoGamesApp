import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar.jsx';

export default function Nav() {
    return (
        <div>
            <nav>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/about'>About</NavLink>
                <SearchBar />
            </nav>

        </div>
    )
}