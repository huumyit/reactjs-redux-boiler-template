import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <nav className="navbar navbar-inverse" role="navigation">
            <ul className="nav navbar-nav">
              <li>
                <NavLink
                  activeClassName="active-st"
                  exact
                  to="/"
                  className="my-link">Home</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active-st"
                  to="/about"
                  className="my-link">About</NavLink>
              </li>
              <li>
                <NavLink
                  activeClassName="active-st"
                  to="/contact"
                  className="my-link">Contact</NavLink>
              </li>
            </ul>
          </nav>
          {/* Content */}
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/contact" component={Contact}/>
        </div>
      </Router>
    );
  }
}

export default App;
