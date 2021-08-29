import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import './App.scss';
import Excursions from './pages/Excursions';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/excursions">
            <Excursions />
          </Route>
          <Route path="/gallery">
            <Gallery />
          </Route>
          <Route path="/contacts">
            <Contacts />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
