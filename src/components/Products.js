import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';

import Product from './Product';

class Products extends Component {
  render() {
    var products = [
      {
        id: 1,
        name: 'iPhone X',
        slug: 'iphone',
        price: 20000000
      },
      {
        id: 2,
        name: 'Samsung Galaxy s7',
        slug: 'samsung',
        price: 20000000
      },
      {
        id: 3,
        name: 'Oppo X',
        slug: 'oppo',
        price: 20000000
      }
    ]; 

    var {match} = this.props; // this.props.match
    var url = match.url;
    
    var result = products.map((product, index) => {
      return (
        <NavLink key={index} to={`${url}/${product.slug}`} >
          <li 
            className="list-group-item"
          >
            {product.id} - {product.name} - {product.price}
          </li>
        </NavLink>
      )
    });

    var { location } = this.props;
    console.log(location);

    return (
      <div className="container">
        <h1>List product</h1>
        <div className="row">
          <ul className="list-group">
            {result}
          </ul>
        </div>
        <div className="row">
          <Route path="/products/:slug" component={Product} />
        </div>
      </div>
    );
  }
}

export default Products;
