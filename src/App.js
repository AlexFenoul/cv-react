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
              <h2> Ceci est une page d'accueil </h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
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
