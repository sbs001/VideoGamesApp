import React from 'react';
import './App.css';
import { Route } from 'react-router';

import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Nav from './components/Nav/Nav';
import VideogameDetail from './components/VideogameDetail/VideogameDetail'
import AddVideogames from './components/AddVideogame/AddVideogame';
import About from './components/About/About';



function App() {
  return (
    <div className="App">
      <Route exact path='/' component={LandingPage} />
      <Route path='/home' component={Nav} />
      <Route exact path='/home' component={Home} />
      <Route path='/home/videogame/:id' render={({ match }) => <VideogameDetail match={match} />} />
      <Route path= '/home/add' component={AddVideogames} />
      <Route path= '/about' component={About} />

    </div>
  );
}
export default App;
