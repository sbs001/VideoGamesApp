import React from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar.jsx';

export default function Nav() {
    return (
        <div className='cntNav'>
            <nav className='nav'>
                <NavLink to='/home' className='navLink'>Home</NavLink>
                <NavLink to='/about' className='navLink'>About</NavLink>
                <SearchBar  />
            </nav>

        </div>
    )
}