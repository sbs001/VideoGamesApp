import React, { useEffect, useState } from 'react';
import { getPlatforms } from '../../store/actions/platformsActions'
import { connect } from 'react-redux';
import './AddVideogame.css';
import axios from 'axios';
import VideogamePosted from './VideogamePosted/VideogamePosted';
import FormCheck from './Forms/FormCheck';
import { URL_VIDEOGAMES } from '../../consts';
import FormDescription from './Forms/FormDescription';
import FormName from './Forms/FormName';
import FormImg from './Forms/FormImg';
import FormRating from './Forms/FormRating';
import FormReleased from './Forms/FormReleased';
import img from '../../imgs/add.png'



export function AddVideogames(props) {

    const [form, setForm] = useState({ name: '', description: '', rating: '', released: '', genres: [], platforms: [] });
    const [imgs, setImgs] = useState({ background_image: '', background_image_additional: '' })
    const [errors, setErrors] = useState({ ...form, genres: '', platforms: '', empty: false });
    const [videogamePosted, setVideogamePosted] = useState(false)

    useEffect(() => {
        props.getPlatforms();
    }, []);

    useEffect(() => {
        if (errors.empty){
            axios.post(URL_VIDEOGAMES, { ...form, ...imgs })
                .catch(err => console.log(err));
                setVideogamePosted(true)}

    }, [errors.empty]);
    
    const handleInputImg = (e) => {
        setImgs({ ...imgs, [e.target.name]: e.target.value })

    };

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
        setErrors(validate(form));

        if (errors.empty)
            document.getElementById('addVideogame').reset();

    };


    return (
        <div className='addVideogames'>

            {videogamePosted ? <VideogamePosted props={form} /> : null}
            <div className='ctnForm'>
                <form id='addVideogame' onSubmit={handleSubmit}>
                    <div className='ctn1'>
                        <FormName onChange={handleInputChange} errors={errors} />

                        <FormDescription onChange={handleInputChange} errors={errors} />

                        <FormRating onChange={handleInputChange} errors={errors} rating={form.rating} />

                        <FormReleased onChange={handleInputChange} errors={errors} />

                        <div className='formCheckG'>
                            <FormCheck data={props.genres} title='genres' onChange={handleInputChecked} errors={errors} />
                        </div>
                    </div>
                    <div className='ctn2'>
                        <FormImg onChange={handleInputImg} imgs={imgs} />

                        <div className='formCheckP'>
                            <FormCheck data={props.platforms} title='platforms' onChange={handleInputChecked} errors={errors} />
                        </div>
                        <img className='imgAdd' src={img} alt='' />
                    </div>

                    <button type='submit' >ADD VIDEOGAME</button>
                </form>
            </div>
        </div>
    )
};


const mapStateToProps = (state) => {
    return {
        genres: state.genres,
        platforms: state.platforms
    }
}

export default connect(mapStateToProps, { getPlatforms })(AddVideogames);




const validate = (form => {
    let errors = {};

    for (const prop in form) {

        if (((Array.isArray(form[prop])) && (!form[prop].length)) || (!form[prop]))
            errors[prop] = `${prop} is required`
    }

    Object.keys(errors).length ? errors.empty = false : errors.empty = true;

    return errors;
});
