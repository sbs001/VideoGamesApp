import React from 'react';
import './Form.css';


export default function FormImg({ onChange, imgs }) {
console.log(imgs)
    return (
        <div className='formImg'>

            <label>Images (URL)**</label><br />
            <input name='background_image' placeholder='Principal..' onChange={onChange} />
            <input name='background_image_additional' placeholder='Additional..' onChange={onChange} alt='IMAGE NOT FOUND' />

            <img src={imgs.background_image} alt='URL NOT FOUND' />

            
            <img src={imgs.background_image_additional} alt='URL NOT FOUND' />
        </div>
    )
}