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
          <Route exact path="/" component={Home} />
          <Route path="/about" component={AboutMe} />
          <Route path="/excursions" component={Excursions} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contacts" component={Contacts} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
