import React from 'react';
import SearchFilter from './SearchFilters';
import ProductsTable from './ProductsTable';

class FilteredTable extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            searchField : '',
            isChecked: false
        };
        this.onSearchChange = this.onSearchChange.bind(this);
        this.onCheckboxChange = this.onCheckboxChange.bind(this);
    }

    onSearchChange(e){
        this.setState({searchField: e.target.value});
    }

    onCheckboxChange(e){
        this.setState({isChecked: e.target.checked});
    }

    render(){
        return(
            <div>
                <SearchFilter 
                onSearchChange={this.onSearchChange} 
                onCheckboxChange={this.onCheckboxChange}/>
                <ProductsTable 
                searchField={this.state.searchField}
                isChecked={this.state.isChecked}/>
            </div>
        )
    }
}

export default FilteredTable;