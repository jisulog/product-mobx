import React, { Component } from 'react';
import ProductInputContainer from './ProductInputContainer';
import ProductListContainer from './ProductListContainer';
import SerachBarContainer from './SerachBarContainer';

class ProductContainer extends Component {
  render() {
    return (
      <div>
        <ProductInputContainer/>
        <SerachBarContainer/>
        <ProductListContainer/>
      </div>
    );
  }
}

export default ProductContainer;