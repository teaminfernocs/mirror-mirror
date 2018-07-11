import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@matierl-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';
import Button from '@material-ui/core/Button';


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