//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { conn, Platform, Genre } = require('./src/db.js');
const axios = require('axios');
const { API_URL_GENRES, API_KEY } = process.env;


const datos = [{ name: 'PC' }, { name: 'PlayStation 5' }, { name: 'Xbox One' }, { name: 'PlayStation 4' }, { name: 'Nintendo Switch' }, { name: 'Nintendo 64' },
    { name: 'Sega' }, { name: 'Android' }, { name: 'PlayStation 3' }, { name: 'Nintendo WII' }, { name: ' Nintendo Gameboy' }
];





// Syncing all the models at once.
conn.sync({ force: true }).then(() => {

    datos.forEach(plat => Platform.create(plat));

    axios.get(`${API_URL_GENRES}${API_KEY}`)
        .then(genres => genres.data.results.forEach(genre => Genre.create({ id: genre.id, name: genre.name })))
        .then(() => server.listen(3001, () => {
            console.log('%s listening at 3001'); // eslint-disable-line no-console
        }))

});