const { Videogame, Genre, Platform } = require('../db.js');
const { validate, v4: uuidv4 } = require('uuid');
const ModelCRUD = require('./index.js');
const axios = require('axios');
const { API_URL_GAMES, API_KEY } = process.env;


const filter = (results) => {

    return results.map(game => {
        return {
            id: game.id,
            name: game.name,
            background_image: game.background_image,
            genres: game.genres,
            rating: game.rating

        }
    })
};


const getFromApi = async(url) => {

    const videogamesApi = await axios.get(url);
    return {
        videogamesApi: filter(videogamesApi.data.results),
        urlNextApiPage: videogamesApi.data.next
    };
};

const getPage = async(gamesObtained, urlApiPage, page = '1', genreId) => {

    const { videogamesApi, urlNextApiPage } = await getFromApi(urlApiPage);
    gamesObtained = [...gamesObtained, ...videogamesApi];

    if (genreId) {
        gamesObtained = gamesObtained.filter(e => e.genres.find(genre => genre.id == genreId)); //filtro genres
    }

    if (gamesObtained.length >= page * 15)
        return gamesObtained.slice((page * 15) - 15, page * 15);

    return await getPage(gamesObtained, urlNextApiPage, page, genreId);
}


class VideogamesModel extends ModelCRUD {
    constructor(model) {
        super(model);

    }

    getAll = async(req, res, next) => {
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

    getVideogameByID = async(req, res, next) => {
        try {
            const id = req.params.id;

            if (validate(req.params.id))
                res.json(await this.model.findOne({ where: { id }, include: [Genre, Platform] }));


            const videogameApi = await axios.get(`${API_URL_GAMES}/${id}${API_KEY}`);

            videogameApi ? res.json(videogameApi.data) : res.sendStatus(404);

        } catch (error) { next(error) }

    }

    getByGenre = async(req, res, next) => {
        try {
            const genreId = req.params.genreId;

            let videogames = await this.model.findAll({ include: Genre });
            videogames = videogames.filter(e => e.genres.find(genre => genre.id == genreId));


            res.json(await getPage(videogames, `${API_URL_GAMES}${API_KEY}`, '1', genreId));


        } catch (error) { next(error) }
    }

    getAdded = async(req, res, next) => {
        try {
            const a = await this.model.findAll({ include: Genre });
            res.json(a);
        } catch (error) { next(error) }
    }

    getOnlyApi = async(req, res, next) => {
        try {

            const { page } = req.query;
            res.json(await getPage([], `${API_URL_GAMES}${API_KEY}`, page))

        } catch (error) { next(error) }
    }

    add = async(req, res, next) => {
        try {

            const { genres, platforms, ...body } = req.body;

            let videogame = await this.model.create({...body, id: uuidv4() });

            genres.forEach(genre => videogame.addGenre(genre.id));
            platforms.forEach(plat => videogame.addPlatform(plat.id))
            return res.json(videogame);

        } catch (error) { next(error) }


    }

}

const videogamesController = new VideogamesModel(Videogame);

module.exports = videogamesController;