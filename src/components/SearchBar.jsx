import React, { Component} from 'react';
import TextField from '@material-ui/core/TextField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';
import Button from '@material-ui/core/Button';
import axios from 'axios';

export default class SearchBar extends Component {
	constructor(props) {
		super(props);

		this.state = {
		searchField: '',
	}
		this.onSearchChange = this.onSearchChange.bind(this);
		this.onSearchSubmit = this.onSearchSubmit.bind(this);
	}

	onSearchChange(event) {
		this.setState({searchField: event.target.value});
	}

	onSearchSubmit() {
		axios.post('/server', {query: this.state.field})
			.then(res => console.log(res))
			.catch(err => console.error(err))
	}

	render() {
	return (
	<MuiThemeProvider theme={theme}>
		<div className='search-bar'>
			<TextField
				label="Search"
				value={this.state.searchField}
				onChange={this.onSearchChange}
				required
			/>
			<Button
			color="primary"
			variant="contained"
			onClick={this.onSearchSubmit}
			>
			Submit
			</Button>
		</div>
	</MuiThemeProvider>
		)
	}
}