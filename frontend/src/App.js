import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from 'react-router-dom';
import './App.css';

import Container from './components/Container';

import About from './pages/About';
import Home from './pages/Home';
import Learn from './pages/Learn';
import Journal from './pages/Journal';
import Accomplishments from './pages/Accomplishments';
import Navbar from './components/Navbar';

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <Container>
        <Router>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>
            <Route path='/learn' exact>
              <Learn />
            </Route>
            <Route path='/accomplishments' exact>
              <Accomplishments />
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
      </Container>
    </React.Fragment>
  );
};

export default App;
