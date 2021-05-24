import React from 'react';
import './Form.css';



export default function FormDescription({ onChange, errors }) {

    return (
        <div className='formDescription'>
            <label>Description:</label>
            <textarea name='description' placeholder='...' onChange={onChange} className={`${errors.description && 'danger'}`}></textarea>

            {errors.description && <div className='danger '>{errors.description}</div>}<br /><br />
        </div>
    )
};
