import React from 'react';

class ProductRow extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let name;
        if(this.props.stocked){
            name = <td>{this.props.name}</td>;
        } else {
            name = <td style={{color:'red'}}>{this.props.name}</td>;
        }
        return (
            <tr>
                {name}
                <td>{this.props.price}</td>
            </tr>
        )
    }
}

export default ProductRow;
