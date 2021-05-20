import React, { useEffect, useState } from 'react';
import { getGenres } from '../../store/actions/index'
import { connect } from 'react-redux';
import './AddVideogame.css';


export function AddVideogames(props) {

    useEffect(() => {
        props.getGenres()
    }, [])

    const [form, setForm] = useState({
        name: '', description: '', rating: '', released: ''
    });

    const [errors, setErrors] = useState({ ...form, disabled: true });



    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (!errors.disabled) e.target.className = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form));
        if (!errors.disabled) e.target[7].className = '';
    }


    return (
        <div>
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
                <button type='submit' className={`${!errors.disabled && 'danger'}`}>ADD VIDEOGAME</button>

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

    (!errors) ? errors.disabled = true : errors.disabled = false;

    return errors;
});
