const { Videogame, Genre, Platform} = require('../db.js');
const { validate, v4: uuidv4 } = require('uuid');
const ModelCRUD = require('./index.js');
const axios = require('axios');
const { API_URL_GAMES, API_KEY } = process.env;

//https://api.rawg.io/api/games?key=41dfe0a01e19490c8cf7a4542ea5b2ba&search=sonic


const filter = (results) => {

    return results.map(game => {
        return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            genres: game.genres,

        }
    })
};


const getFromApi = async (url) => {

    const videogamesApi = await axios.get(url);
    return {
        videogamesApi: filter(videogamesApi.data.results),
        urlNextApiPage: videogamesApi.data.next
    };
};

const getPage = async (gamesObtained, urlApiPage, page = '1') => {

    const { videogamesApi, urlNextApiPage } = await getFromApi(urlApiPage);
    gamesObtained = [...gamesObtained, ...videogamesApi];

    if (gamesObtained.length >= page * 15)
        return gamesObtained.slice((page * 15) - 15, page * 15);

    return await getPage(gamesObtained, urlNextApiPage, page);
}


class VideogamesModel extends ModelCRUD {
    constructor(model) {
        super(model);

    }

    getAll = async (req, res, next) => {
        try {
            const { name, page } = req.query;

            if (name) {
                const videogamesLocal = await this.model.findAll({ where: { name }, include: Genre });

                return res.json(await getPage(videogamesLocal, `${API_URL_GAMES}${API_KEY}&search=${name}`));
            }

            const videogames = await this.model.findAll({ include: Genre });
            res.json(await getPage(videogames, `${API_URL_GAMES}${API_KEY}`, page));

        } catch (error) { next(error) }

    };

    //ver
    getVideogameByID = async (req, res, next) => {
        try {
            const id = req.params.id;

            if (validate(req.params.id))
                res.json(await this.model.findOne({ where: { id }, include: [Genre, Platform] }));


            const videogameApi = await axios.get(`${API_URL_GAMES}/${id}${API_KEY}`);

            videogameApi ? res.json(videogameApi.data) : res.sendStatus(404);

        } catch (error) { next(error) }

    }

    add = async (req, res, next) => {
        try {

            const { genres,platforms, ...body } = req.body;

            let videogame = await this.model.create({ ...body, id: uuidv4() });

            genres.forEach(genre => videogame.addGenre(genre.id));
            platforms.forEach(plat => videogame.addPlatform(plat.id))
            return res.json(videogame);

        } catch (error) { next(error) }


    }

}

const videogamesController = new VideogamesModel(Videogame);

module.exports = videogamesController;
