const { Genre } = require('../db.js');
const ModelCRUD = require('./index.js');
const axios = require('axios');
const { API_URL_GENRES, API_KEY } = process.env;


_loadDB = async (model) => {
    const genres = await axios.get(`${API_URL_GENRES}${API_KEY}`);

    genres.data.results.forEach(genre => model.create({ id: genre.id, name: genre.name }))
}


class GenresModel extends ModelCRUD {
    constructor(model) {
        super(model);
        // _loadDB(model);
    }

}

const genresController = new GenresModel(Genre);

module.exports = genresController;