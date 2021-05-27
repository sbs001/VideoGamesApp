const { Platform } = require('../db.js');
const ModelCRUD = require('./index.js');
const axios = require('axios');
const { API_KEY, API_URL_GENRES } = process.env;

const datos = [{ name: 'PC' }, { name: 'PlayStation 5' }, { name: 'Xbox One' }, { name: 'PlayStation 4' }, { name: 'Nintendo Switch' }, { name: 'Nintendo 64' },
{ name: 'Sega' }, { name: 'Android' }, { name: 'PlayStation 3' }, { name: 'Nintendo WII' }, { name: ' Nintendo Gameboy' }];

loadDB = async (model) => {
    await axios.get(`${API_URL_GENRES}${API_KEY}`)

    await datos.forEach(plat => model.create(plat))
}

class PlatformModel extends ModelCRUD {
    constructor(model) {
        super(model);
        loadDB(this.model);
    }
};

const platformsController = new PlatformModel(Platform);

module.exports = platformsController;