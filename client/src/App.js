import React from 'react';
import './App.css';
import { Route } from 'react-router';

import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Nav from './components/Nav/Nav';
import VideogameDetail from './components/VideogameDetail/VideogameDetail'

function App() {
  return (
    <div className="App">
      <Route path='/home' component={Nav} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
      <Route path='/home/videogame/:id' render={({ match }) => <VideogameDetail match={match} />} />
    </div>
  );
}
export default App;
