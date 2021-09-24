import React, { Component } from 'react';
import {observer} from 'mobx-react';
import ProductStore from '../store/ProductStore';

class SerachBarContainer extends Component {
  productStore = ProductStore;
  render() {
    return (
      <div>
        <h2>Product Search</h2>
        <form>
          <input type="text" placeholder="Search..." value={this.productStore.filterText} onChange={(e)=>this.productStore.handlerFilterTextChange(e.target.value)}/>
          <p><input type="checkbox" name="bar" value="1" checked={this.productStore.inStockOnly} onChange={(e)=>this.productStore.handlerInstockChange(e.target.checked)}/>Only show products in stock</p>
        </form>
        <hr/>
      </div>
    );
  }
}

export default observer(SerachBarContainer);