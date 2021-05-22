const { Router } = require('express');
const router = Router();
const controller = require('../controllers/platforms.js');


router.get('/', controller.getAll);

router.post('/', controller.add);


module.exports = router;
