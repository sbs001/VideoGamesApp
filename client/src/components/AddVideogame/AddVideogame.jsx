import React, { useState } from 'react';
import './AddVideogame.css';


export default function AddVideogames() {

    const [form, setForm] = useState({
        name: '', description: '', rating: '...', relaased: ''
    });


    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value })
    }


    return (
        <div>
            <form >
                <label>Name</label>
                <input name='name' placeholder='Name...' onChange={handleInputChange} /><br /><br />

                <label>Description</label>
                <textarea name='description' placeholder='...' onChange={handleInputChange}></textarea><br /><br />

                <label>Rating</label><br />
                <input name='rating' type='range' min='0' max='10' step='.01' onChange={handleInputChange} />
                <span>{form.rating}</span> <br /><br />


                <label>Relaased</label>
                <input name='relaased' type='date' onChange={handleInputChange} /><br /><br />

                <label>Platforms</label><br />
                <input name='platforms' type='checkbox' onChange={handleInputChange} />
                <label>ps2</label><br />
                <input name='platforms' type='checkbox' onChange={handleInputChange} />
                <label>pc</label><br />
                <input name='platforms' type='checkbox' onChange={handleInputChange} />
                <label>xbox</label><br />
                <br /><br />


                <button type='submit'>ADD VIDEOGAME</button>

            </form>
                
        </div>
    )
};