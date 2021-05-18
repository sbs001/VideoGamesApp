const { Router } = require('express');
const router = Router();
const controller = require('../controllers/genres.js')


router.get('/', controller.getAll);

module.exports = router;