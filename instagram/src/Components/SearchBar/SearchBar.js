import React from 'react';

const SearchBar = props => {
    return (
        <form className='search-bar-input'>
            <input
                type='text'
                placeholder='Search'
                onChange={props.filterSearchResults}  
            />
        </form>
    );
}
 
export default SearchBar;