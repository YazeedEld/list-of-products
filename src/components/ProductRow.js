import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <tr>
                <td>{this.props.productName}</td>
                <td>{this.props.productPrice}</td>
            </tr>
        )
    }
}

export default ProductRow;
