const { Router } = require('express');
const router = Router();
const controller = require('../controllers/videogames.js');


router.get('/', controller.getAll);

router.get('/:id', controller.getVideogameByID);

router.post('/', controller.add);

router.post('/add', controller.addGenres);

module.exports = router;
