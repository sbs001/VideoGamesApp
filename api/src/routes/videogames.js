const { Router } = require('express');
const router = Router();
const controller = require('../controllers/videogames.js');

router.get('/added', controller.getAdded);

router.get('/default', controller.getOnlyApi);

router.get('/', controller.getAll);

router.get('/:id', controller.getVideogameByID);

router.post('/', controller.add);

router.get('/genre/:genreId', controller.getByGenre);




module.exports = router;