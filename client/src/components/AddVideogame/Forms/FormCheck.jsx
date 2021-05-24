import React from 'react';
import './FormCheck.css';


export default function FormCheck({ data, title, onChange, errors }) {


    return (
        <div className='formCheck'>
            <span> {(title === 'genres') ? 'Genres:' : 'Platforms:'}</span>
            <form name='form' >
                {data.map(elem =>
                    <div className='input'>
                        <input type='checkbox' title={title} id={elem.id} name={elem.name} onChange={onChange} />

                        <label>{`${elem.name}    `}</label>
                    </div>)}
            </form>
            {errors[title] && <div className='danger '>{errors[title]}</div>}<br /><br />
        </div>
    )
}