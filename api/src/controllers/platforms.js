const { Platform } = require('../db.js');
const ModelCRUD = require('./index.js');
const axios = require('axios');
const { API_KEY, API_URL_GENRES } = process.env;


class PlatformModel extends ModelCRUD {
    constructor(model) {
        super(model);
    }
};

const platformsController = new PlatformModel(Platform);

module.exports = platformsController;