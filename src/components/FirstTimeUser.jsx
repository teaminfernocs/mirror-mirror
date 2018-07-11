import React, { Component } from 'react';
import axios from 'axios';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme.js';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';



export default class FirstTimeUser extends Component {
	constructor() {
		super();
		this.state = {
			phone: ''
		}
	}

	handlePhone(event) {
    this.setState({ phone: event.target.value });
  } 
	render() {
    return (
      <MuiThemeProvider theme={theme}>
      <h4>Welcome to Mirror-Mirror, please enter your phone number to enable notifications</h4> 
      <form>
      	<FormControl >
      		<TextField
              label="Company"
              value={this.state.phone}
              onChange={this.handlePhone}
              required
           />
      		<br />
      		<Button
            variant="contained"
            color="primary"
          >
            Submit
        </Button>
      	</FormControl>
      	</form>
      </MuiThemeProvider>
    )
  }
}