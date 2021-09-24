import { makeAutoObservable } from "mobx";
import Products from '../Products'


class ProductStore {

  // observable
  filterText = "";
  inStockOnly = false;

  product = { category: "", price: "", stocked: true, name: "" }
  products = Products;

  constructor() {
    makeAutoObservable(this)
  }


  // action - search
  handlerFilterTextChange(filterText) {
    this.filterText = filterText;
  }

  handlerInstockChange(inStockChange) {
    this.inStockOnly = inStockChange;
  }


  // action - input
  handlertSetProps = (name, value) => {
    this.product = { ...this.product, [name]: value };
  }


  // action - button
  handlerSelect = (name)=>{
    this.product = this.products.find((element)=>element.name === name);
  }

  handlerAdd = () => {
    this.products = this.products.concat(this.product);
    // category 기준으로 정렬
    this.products = this.products.sort(function (a, b) {
      var nameA = a.category.toUpperCase(); // ignore upper and lowercase
      var nameB = b.category.toUpperCase(); // ignore upper and lowercase
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      // 이름이 같을 경우
      return 0;
    });
    this.init();
    }
  
    handlerModify = () => {
        this.products = this.products.map((element) => (element.name === this.product.name ? this.product : element));
        this.init();
      }
  
    handlerRemove = () => {
        this.products = this.products.filter((element) => element.name !== this.product.name);
        this.init();
      }

    init =()=>{
      this.product = { category: "", price: "", stocked: false, name: "" };
     }


}

export default new ProductStore();