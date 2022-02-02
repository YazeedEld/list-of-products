import React from "react";
import ProductsCategoryRow from "./ProductsCategoryRow";
import ProductRow from "./ProductRow";
import {data} from "../data";
const categories = ['Sporting Goods' , 'Electronics'];

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  filterProducts(list, category, searchField, isChecked) {
      return list.filter((product) => {
          return (
            product.category === category &&
            product.name.toLowerCase().includes(searchField.toLowerCase()) &&
            !(isChecked && !product.stocked)
          );
      })
  }

  listToComponents(list) {
    return list.map((product,index) => {
            return (
                <ProductRow 
                    key={index}
                    category={product.category}
                    price={product.price}
                    stocked={product.stocked}
                    name={product.name}/> 
            )
        })
  }

  render() {
    let {searchField, isChecked} = this.props;
    
    let sportsList = this.filterProducts(data,'Sporting Goods', searchField, isChecked);
    let elecList = this.filterProducts(data,'Electronics', searchField, isChecked);

    return (
      <table style={{width:'90%'}}>
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
          </tr>
          <ProductsCategoryRow category='Sporting Goods'/>
          {this.listToComponents(sportsList)}
          <ProductsCategoryRow category='Electronics'/>
          {this.listToComponents(elecList)}
        </tbody>
      </table>
    );
  }
}

export default ProductsTable;
