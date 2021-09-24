import React, { Component } from 'react';
import { observer } from 'mobx-react';
import ProductStore from '../store/ProductStore';

class ProductInputContainer extends Component {
  productStore = ProductStore;
  render() {
    return (
      <div>
        <h2>Product Add & Delete & Modify</h2>
        category : <select name="category" value={this.productStore.product.category}
          onChange={(e) => this.productStore.handlertSetProps(e.target.name, e.target.value)}>
          <option value="none">=== 선택 ===</option>
          <option value="Sporting Goods">Sporting Goods</option>
          <option value="Electronics">Electronics</option>
        </select><br/>
        price : <input type="text" name="price" placeholder="price" value={this.productStore.product.price}
          onChange={(e) => this.productStore.handlertSetProps(e.target.name, e.target.value)} /> <br/>
        productname : <input type="text" name="name" placeholder="productname" value={this.productStore.product.name}
          onChange={(e) => this.productStore.handlertSetProps(e.target.name, e.target.value)} /><br/>
        stocked : <input type="checkbox" name="stocked" checked={this.productStore.product.stocked} onChange={(e)=>this.productStore.handlertSetProps(e.target.name, e.target.checked)}/>
        <br/>
        <button onClick={()=>this.productStore.handlerAdd()}>추가</button> &nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.productStore.handlerRemove()}>삭제</button> &nbsp;&nbsp;&nbsp;
        <button onClick={()=>this.productStore.handlerModify()}>수정</button>
        <hr/>
      </div>
    );
  }
}

export default observer(ProductInputContainer);