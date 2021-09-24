import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';
import ProductCategoryView from '../view/ProductCategoryView';
import ProductView from '../view/ProductView'

class ProductListContainer extends Component {
  productStore = ProductStore;
  render() {
    const rows = [];
    let lastCategory = null;
    const {filterText, inStockOnly} = this.productStore;
    const products = this.productStore.products;
    
    products.forEach((product)=>{
      if(product.name.indexOf(filterText) === -1) return;
      if(inStockOnly && !product.stocked) return;

      if(product.category !== lastCategory){
        rows.push(
          <ProductCategoryView category={product.category} key={product.category} />
        );
      }
      rows.push(
        <ProductView onClick={this.productStore.handlerSelect} product={product} key={product.name} />
      );
      lastCategory = product.category;
    });
    return (
      <div>
        <h2>Product</h2>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {rows}
          </tbody>
        </table>
      </div>
    );
  }
}

export default observer(ProductListContainer);