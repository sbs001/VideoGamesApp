import React, { useState } from 'react';
import { connect } from "react-redux";
import { isSearch, restartPage } from '../../store/actions';
import { searchVideogame } from '../../store/actions/videogamesActions'
import './SearchBar.css';

export function SearchBar(props) {

    const [input, setInput] = useState('');

    const handleInputChange = (e) => {
        setInput(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        props.restartPage();
        props.searchVideogame(input);
        document.getElementById('searchBar').reset();
        if (window.location.pathname !== '/home'){
            props.isSearch();
            window.history.back();
        }
       
    };

    return (
        <form id='searchBar' onSubmit={handleSubmit}>
            <input className='searchInput' type="text" placeholder="Search..." onChange={handleInputChange} />
            <input className='searchBtn' type="submit" value='Search 🔍' />
            
        </form>
    )
}

export default connect(null, { searchVideogame,restartPage,isSearch })(SearchBar);