import React from "react";
import ProductsCategoryRow from "./ProductsCategoryRow";
import ProductRow from "./ProductRow";
import {data} from "../data";
const categories = ['Sporting Goods' , 'Electronics'];

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  //loading the data
  componentDidMount(){

  }

  filterProducts(list, category) {
      return list.filter((product) => {
          return product.category === category;
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
    // let productList = data.map((product,index) => {
    //     return (
    //         <ProductRow 
    //             key={index}
    //             category={product.category}
    //             price={product.price}
    //             stocked={product.stocked}
    //             name={product.name}/> 
    //     )
    // });

    let sportsList = this.filterProducts(data,'Sporting Goods');
    let elecList = this.filterProducts(data,'Electronics');
    
    return (
      <table style={{width:'100%'}}>
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
