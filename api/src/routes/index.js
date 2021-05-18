const { Router } = require('express');
const videogameRouter = require('./videogames.js');
const genresRouter = require('./genres.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/videogames', videogameRouter);

router.use('/genres', genresRouter);

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/', (req, res) => {
    return res.send('Estoy en /')
});

module.exports = router;
