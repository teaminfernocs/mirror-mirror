import React, { Component } from 'react';
import axios from 'axios';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import { Link } from 'react-router-dom';

export default class SearchResults extends Component {
	constructor(props) {
		super(props)

		this.state = {
			list: [],
		}
	}

componentDidMount() {
	
}

	render() {
		return (
			<MuiThemeProvider theme={theme}>
				<Table className="search-results">
					<TableHead>
						<TableRow>
							<TableCell>Company</TableCell>
							<TableCell>Position</TableCell>
							<TableCell>Posted By</TableCell>
							<TableCell>Link</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{
							this.state.list.map((item, index) => (
								<TableRow key={index}>
									<TableCell>{item.company}</TableCell>
									<TableCell>{item.position}</TableCell>
									<TableCell>{item.displayName}</TableCell>
									<TableCell>
										<Link>
											<Button variant="contained" color="primary">
											Go
											</Button>
										</Link>
									</TableCell>
								</TableRow>
							))
						}
					</TableBody>
				</Table>
			</MuiThemeProvider>
		);
	}
}