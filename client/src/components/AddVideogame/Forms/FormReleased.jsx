import React from 'react';
import './Form.css';


export default function FormReleased({ onChange,errors }) {

    return (
        <div className='formReleased'>
            <label>Released</label>

            <input name='released' type='date' onChange={onChange} className={`${errors.released && 'danger'}`} />

            {errors.released && <div className='danger '>{errors.released}</div>}<br /><br />
        </div>
    )
}