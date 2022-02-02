import React from 'react';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        const {onSearchChange, onCheckboxChange} = this.props;
        return (
            <form className='filters'>
                <input 
                type='text' 
                name='searchFilter' 
                placeholder='Search...'
                onChange={onSearchChange}/>
                <br/>
                <input
                type='checkbox'
                id='inStock'
                name='inSotck'
                onChange={onCheckboxChange}/>
                <label htmlFor='inStock'>Only show products in stock</label>
            </form>
        )
    }
}

export default SearchFilter;