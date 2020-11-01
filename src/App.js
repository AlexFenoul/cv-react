import React from 'react';
import logo from './logo.svg';
import { Header } from './core/layout/header/Header';
import { Footer } from './core/layout/footer/Footer';
import { PageNotFound } from './core/page-not-found/PageNotFound';
import { Profile } from './features/profile/Profile';
import { Career } from './features/career/Career';
import { Skill } from './features/skill/Skill';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>         
          <Route path="/profil">
            <Profile />
          </Route>
          <Route path="/parcours">
            <Career />
          </Route>
          <Route path="/competence">
            <Skill />
          </Route>
          <Route exact path="/">
            <div className='home'>
              <p> home </p>
            </div>
          </Route>
          <Route component={PageNotFound} />
  
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
