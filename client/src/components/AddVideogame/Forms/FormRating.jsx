import React from 'react';
import './Form.css';


export default function FormRating({ onChange, errors, rating}) {

    return (
        <div className='formRating'>
            <label>Rating</label><br />
            <input name='rating' type='range' min='0' max='10' step='.01' onChange={onChange} className={`${errors.rating && 'danger'}`} />

            <span>{rating || '0'}</span>

            {errors.rating && <div className='danger '>{errors.rating}</div>}<br /><br />


        </div>
    )
}