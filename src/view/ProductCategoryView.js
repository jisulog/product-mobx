import React, { Component } from 'react';

class ProductCategoryView extends Component {
  render() {
    return (
      <tr>
        <th colSpan="2">{this.props.category}</th>
      </tr>
    );
  }
}

export default ProductCategoryView;