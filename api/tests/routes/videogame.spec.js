/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require('chai');
const session = require('supertest-session');
const app = require('../../src/app.js');
const { Videogame, conn } = require('../../src/db.js');

const agent = session(app);
const videogame = {
  id :'760b9562-b30d-52d5-b827-655787665500',
  name: 'Super Mario Bros',
  description : 'Mario salta hongos'
};

xdescribe('Videogame routes', () => {
  before(() => conn.authenticate()
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  }));
  beforeEach(() => Videogame.sync({ force: true })
    .then(() => Videogame.create(videogame)));
  describe('GET /videogames', () => {
    it('should get 200', () =>
      agent.get('/videogames').expect(200)
    );
  });
});


describe('Test Route Videogame', () => {
  describe('GET /', () => {
    it('responds with 200', () => agent.get('/').expect(200));
    
    it('responds with and object with message `hola`', () =>
      agent.get('/').then((res) => {
        expect(res.body.message).to.be.equal('hola');
      }));
  });

})





