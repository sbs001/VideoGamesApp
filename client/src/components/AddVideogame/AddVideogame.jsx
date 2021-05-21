import React, { useEffect, useState } from 'react';
import { getGenres } from '../../store/actions/index'
import { connect } from 'react-redux';
import './AddVideogame.css';
import axios from 'axios';


export function AddVideogames(props) {

    const [form, setForm] = useState({name: '', description: '', rating: '', released: ''});

    const [errors, setErrors] = useState({ ...form, empty :false});

    const [videogamePosted,setVideogamePosted] = useState(false)
    
    useEffect(() => {
        props.getGenres()
    }, []);

    useEffect(() => {
        if (errors.empty)
            axios.post('http://localhost:3001/videogames', { ...form, platforms: 'ps2' })
                .then(setVideogamePosted(true))
                .catch(err => console.log(err));

    }, [errors.empty])


    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (!errors.empty) e.target.className = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form))

        if (errors.empty) 
            axios.post('http://localhost:3001/videogames', {...form, platforms:'ps2'})
            .then(setVideogamePosted(true))
            .catch(err => console.log(err));

    }
    return (
        <div>
             {
                 videogamePosted ?  <div className='popUp'><p>{form.name}</p><p>{form.description}</p><p>{form.rating}</p><p>{form.released}</p> </div> : null
             }
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' placeholder='Name...' onChange={handleInputChange} className={`${errors.name && 'danger'}`} />
                {errors.name && <div className='danger '>{errors.name}</div>}<br /><br />

                <label>Description</label>
                <textarea name='description' placeholder='...' onChange={handleInputChange} className={`${errors.description && 'danger'}`}></textarea>
                {errors.description && <div className='danger '>{errors.description}</div>}<br /><br />


                <label>Rating</label><br />
                <input name='rating' type='range' min='0' max='10' step='.01' onChange={handleInputChange} className={`${errors.rating && 'danger'}`} />
                <span>{form.rating}</span>
                {errors.rating && <div className='danger '>{errors.rating}</div>}<br /><br />


                <label>Released</label>
                <input name='released' type='date' onChange={handleInputChange} className={`${errors.released && 'danger'}`} />
                {errors.released && <div className='danger '>{errors.released}</div>}<br /><br />

                <label>Platforms</label><br />
                <input name='platforms' type='checkbox' />
                <label>ps2</label><br />
                <input name='platforms' type='checkbox' />
                <label>pc</label><br />
                <input name='platforms' type='checkbox' />
                <label>xbox</label><br />
                <br /><br />

                <form name='fomra' onChange={(e) => console.log(e)}>
                    {
                        props.genres.map(genre =>
                            <div>
                                <input type='checkbox' name={genre.name} />
                                <label>{`${genre.name}    `}</label>
                            </div>
                        )

                    }
                </form>
                <button type='submit' >ADD VIDEOGAME</button>
            </form>
            
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        genres: state.genres
    }
}

export default connect(mapStateToProps, { getGenres })(AddVideogames);




const validate = (form => {
    let errors = {};

    for (const prop in form) {
        if (!form[prop])
            errors[prop] = `${prop} is required`
    }

    Object.keys(errors).length ? errors.empty = false : errors.empty = true;

    return errors;
});
