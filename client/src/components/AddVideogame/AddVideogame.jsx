import React, { useEffect, useState } from 'react';
import { getGenres,getPlatforms } from '../../store/actions/index'
import { connect } from 'react-redux';
import './AddVideogame.css';
import axios from 'axios';
import VideogamePosted from './VideogamePosted/VideogamePosted';
import { IMG_EMPTY } from '../../consts';


export function AddVideogames(props) {

    const [form, setForm] = useState({ name: '', description: '', rating: '', released: '', genres: [], platforms: [] });
    const [imgs, setImgs] = useState({ background_image: '', background_image_additional: '' })
    const [errors, setErrors] = useState({ ...form, genres: '',platforms:'', empty: false });
    const [videogamePosted, setVideogamePosted] = useState(false)

    useEffect(() => {
        props.getGenres();
        props.getPlatforms();
    }, []);

    useEffect(() => {
        if (errors.empty)
            axios.post('http://localhost:3001/videogames', { ...form, ...imgs })
                .then(setVideogamePosted(true))
                .catch(err => console.log(err));

    }, [errors.empty])

    const handleInputImg = (e) => {
        setImgs({ ...imgs, [e.target.name]: e.target.value })
    }
    const handleInputChecked = (e) => {
        let arr = [...form[e.target.title]];

        e.target.checked ? arr.push({ id: e.target.id, name: e.target.name }) : arr = arr.filter(el => el.id !== e.target.id)

        setForm({ ...form, [e.target.title]: arr })
    };

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (!errors.empty) e.target.className = '';
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validate(form))
    };


    return (
        <div>
            {videogamePosted ? <VideogamePosted props={form} /> : null}

            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input name='name' placeholder='Name...' onChange={handleInputChange} className={`${errors.name && 'danger'}`} />
                {errors.name && <div className='danger '>{errors.name}</div>}<br /><br />

                <label>Description</label>
                <textarea name='description' placeholder='...' onChange={handleInputChange} className={`${errors.description && 'danger'}`}></textarea>
                {errors.description && <div className='danger '>{errors.description}</div>}<br /><br />

                <label>Images (URL)**</label><br />
                <input name='background_image' placeholder='Principal..' onChange={handleInputImg} /><br />
                {imgs.background_image ? <img src={imgs.background_image} alt='IMAGE NOT FOUND' /> : <img src={IMG_EMPTY} />}<br />
                <input name='background_image_additional' placeholder='Additional..' onChange={handleInputImg} alt='IMAGE NOT FOUND' /><br />
                {imgs.background_image_additional ? <img src={imgs.background_image_additional} /> : <img src={IMG_EMPTY} />}<br /><br />

                <label>Rating</label><br />
                <input name='rating' type='range' min='0' max='10' step='.01' onChange={handleInputChange} className={`${errors.rating && 'danger'}`} />
                <span>{form.rating}</span>
                {errors.rating && <div className='danger '>{errors.rating}</div>}<br /><br />


                <label>Released</label>
                <input name='released' type='date' onChange={handleInputChange} className={`${errors.released && 'danger'}`} />
                {errors.released && <div className='danger '>{errors.released}</div>}<br /><br />

               {errors.genres && <div className='danger '>{errors.genres}</div>}<br /><br />
                <form name='fomra' >
                    {
                        props.genres.map(genre =>
                            <div>
                                <input type='checkbox' title='genres' id={genre.id} name={genre.name} onChange={handleInputChecked} />
                                <label>{`${genre.name}    `}</label>
                            </div>
                        )

                    }
                </form>

                {errors.platforms && <div className='danger '>{errors.platforms}</div>}<br /><br /> 
                <form name='fomra' >
                    {
                        props.platforms.map(platform =>
                            <div>
                                <input type='checkbox' title='platforms' id={platform.id} name={platform.name} onChange={handleInputChecked} />
                                <label>{`${platform.name}    `}</label>
                            </div>
                        )

                    }
                </form>
                <button type='submit' >ADD VIDEOGAME</button>
            </form>
            {console.log(form)}
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        platforms: state.platforms
    }
}

export default connect(mapStateToProps, { getGenres, getPlatforms })(AddVideogames);




const validate = (form => {
    let errors = {};

    for (const prop in form) {

        if (((Array.isArray(form[prop])) && (!form[prop].length)) || (!form[prop]))
            errors[prop] = `${prop} is required`
    }

    Object.keys(errors).length ? errors.empty = false : errors.empty = true;

    return errors;
});
