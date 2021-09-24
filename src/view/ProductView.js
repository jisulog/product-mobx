import React, { Component } from 'react';

class ProductView extends Component {
  render() {
    const {product, onClick} = this.props;
    return (
      <tr onClick={()=>onClick(product.name)}>
        <td>{product.stocked ? (product.name) : (<span style={{color:"red"}}> {product.name} </span>)} </td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductView;