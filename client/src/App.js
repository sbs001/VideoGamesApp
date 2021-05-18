import React from 'react';
import './App.css';
import { Route } from 'react-router';

import Home from './components/Home/Home.jsx';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import Nav from './components/Nav/Nav';


function App() {
  return (
    <div className="App">
      <h1>Henry Videogames!</h1>
      <Route path='/home' component={Nav} />
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/home' component={Home} />
    </div>
  );
}

export default App;
