import React from 'react';
import './Form.css';

export default function FormName({ onChange, errors }) {

    return (
        <div className='formName'>
            <label>
                Name  {errors.name && <span className='danger '>{errors.name} !!</span>}
            </label>
            <input name='name' placeholder='Name...' onChange={onChange} className={`${errors.name && 'danger'}`} />
        </div>
    )
}