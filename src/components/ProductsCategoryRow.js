import React from "react";

class ProductsCategoryRow  extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
        <tr>
        <td><b>{this.props.category}</b></td>
        </tr>
    );
  }
}

export default ProductsCategoryRow;
