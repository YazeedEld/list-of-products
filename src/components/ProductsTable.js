import React from "react";
import ProductsCategoryRow from "./ProductsCategoryRow";
import ProductRow from "./ProductRow";
import {data} from "../data";
const categories = ['Sporting Goods' , 'Electronics'];

class ProductsTable extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    // let productList = data.map((product,index) => {
    //     if (product.category == 'Sporting Good'){

    //     } else if (product.category == 'Electronics'){

    //     }
    // })
    console.log(data);
    return (
      <table style={{width:'100%'}}>
        <tbody>
          <tr>
            <td><b>Name</b></td>
            <td><b>Price</b></td>
          </tr>
          <ProductsCategoryRow categoryName='Sporting Goods'/>
          <ProductRow productName='Football' productPrice='$49.99'/>  



          <ProductsCategoryRow categoryName='Electronics'/>
        </tbody>
      </table>
    );
  }
}

export default ProductsTable;
