import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

import About from './pages/About';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Journal from './pages/Journal';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Router>
        <Switch>
          <Route path='/' exact>
            <Home />
          </Route>
          <Route path='/learn' exact>
            <Learn />
          </Route>
          <Route path='/journal' exact>
            <Journal />
          </Route>
          <Route path='/about' exact>
            <About />
          </Route>
          <Redirect to='/' />
        </Switch>
      </Router>
    </React.Fragment>
  );
};

export default App;
