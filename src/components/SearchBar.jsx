import React from 'react';

const SearchBar = ({ searchField, searchChange }) => {
    return (
        <div className='search-bar'>
        <input 
            className='text-box'
            type='search'
            placeholder='Search questions'
            value={searchField}
            onChange={searchChange}
            />
        </div>
    )
};

export default SearchBar;