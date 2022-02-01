import React from 'react';
import SearchFilter from './SearchFilters';
import ProductsTable from './ProductsTable';

class FilteredTable extends React.Component {
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div>
                <h2>List of Products</h2>
                <SearchFilter/>
                <ProductsTable/>
            </div>
        )
    }
}

export default FilteredTable;