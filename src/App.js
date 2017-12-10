import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, NavLink, Link} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const MenuLink = ({label, to, activeOnlyWhenExaxct}) => {
  return (
    <Route path={to} exact={activeOnlyWhenExaxct} children={({match}) => {
      var active = match ? 'active abc' : '';
      return (
        <li className={active} >
          <NavLink
            to={to}
            className="my-link">
              {label}
          </NavLink>
        </li>
      )
    }} />
  )
}

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <nav className="navbar navbar-inverse" role="navigation">
            <ul className="nav navbar-nav">
              <MenuLink label="Home" to="/" activeOnlyWhenExaxct={true} />
              <MenuLink label="About" to="/about" activeOnlyWhenExaxct={false} />
              <MenuLink label="Contact" to="/contact" activeOnlyWhenExaxct={false} />
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
