const { Genre } = require('../db.js');
const ModelCRUD = require('./index.js');





class GenresModel extends ModelCRUD {
    constructor(model) {
        super(model);
    }
}

const genresController = new GenresModel(Genre);

module.exports = genresController;