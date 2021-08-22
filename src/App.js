import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import AboutMe from './pages/AboutMe';
import './App.scss';

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
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
