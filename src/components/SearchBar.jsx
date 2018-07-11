import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';


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


class newSearchBar extends Component {
	constructor(props) {
			super(props);
			
			this.state = {
				searchField: '',
			}
			this.onSearchChange = this.onSearchChange.bind(this);
	}

	
	onSearchChange(event) {
		this.setState({searchField: event.target.value});
	}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<div className='search-bar'>
					<TextField
						label='Search Questions'
						value={searchField}
						onChange={this.onSearchChange}
						required
					/>
				</div>
			</MuiThemeProvider>
		)
	}
}