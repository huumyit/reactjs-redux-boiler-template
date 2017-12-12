import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    name: 'Home',
    to: '/',
    exact: true
  }, {
    name: 'About',
    to: '/about',
    exact: false
  }, {
    name: 'Products',
    to: '/products',
    exact: false
  }, {
    name: 'Contact',
    to: '/contact',
    exact: false
  }, {
    name: 'Login',
    to: '/login',
    exact: false
  }
]

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
  return (<Route
    path={to}
    exact={activeOnlyWhenExact}
    children={({match}) => {
    var active = match
      ? 'active abc'
      : '';
    return (
      <li className={`my-li ${active}`}>
        <Link to={to} className="my-link">
          {label}
        </Link>
      </li>
    )
  }}/>)
}

class Menu extends Component {

  showMenus = (menus) => {
    var result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (< MenuLink key = {
          index
        }
        label = {
          menu.name
        }
        to = {
          menu.to
        }
        activeOnlyWhenExact = {
          menu.exact
        } />)
      });
    }
    return result;
  }

  render() {
    return (
      <div>
        <nav className="navbar navbar-inverse" role="navigation">
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </nav>
      </div>
    );
  }
}

export default Menu;
