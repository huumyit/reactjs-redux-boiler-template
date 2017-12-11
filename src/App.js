import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Menu from './components/Menu';
import routes from './routes';

class App extends Component {

  showContentMenu = () => {
    var result = null;
    if (routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route 
            key={index} 
            path={route.path} 
            exact={route.exact}
            component={route.main} 
          />
        )
      });
    }
    return result;
  }

  render() {
    return (
      <Router>
        <div>
          {/* Menu */}
          <Menu />
          {/* Content */}
          <Switch>
            {this.showContentMenu(routes)} 
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
