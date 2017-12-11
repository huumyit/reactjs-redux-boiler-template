import React, { Component } from 'react';

class Product extends Component {
  render() {

    var { match } = this.props;
    var name = match.params.slug;

    return (
      <div className="alert alert-success">
        <strong>Product details: {name} </strong>
      </div>
      
    );
  }
}

export default Product;
