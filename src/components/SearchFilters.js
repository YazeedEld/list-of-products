import React from 'react';

class SearchFilter extends React.Component {
    constructor(props) {
        super(props);
    }

    render () {
        return (
            <form className='filters'>
                <input 
                type='text' 
                name='searchFilter' 
                placeholder='Search...'/>
                <br/>
                <input
                type='checkbox'
                id='inStock'
                name='inSotck'/>
                <label htmlFor='inStock'>Only show products in stock</label>

            </form>
        )
    }
}

export default SearchFilter;