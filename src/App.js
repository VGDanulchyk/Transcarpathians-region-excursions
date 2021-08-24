import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import './App.scss';
import Excursions from './pages/Excursions';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
