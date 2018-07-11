/* globals document */
import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';

const listStyles = {
  marginBottom: '2em',
};


export default class CompanyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      website: '',
      city: '',
      state: '',
      country: ''
    };

    this.handleCompany = this.handleCompany.bind(this);
    this.handleCompany = this.handleWebsite.bind(this);
    this.handleCompany = this.handleCity.bind(this);
    this.handleCompany = this.handleState.bind(this);
    this.handleCompany = this.handleCountry.bind(this);

  }

  handleCompany(event) {
    this.setState({ company: event.target.value });
  }

  handleWebsite(event) {
    this.setState({ website: event.target.value });
  }

  handleCity(event) {
    this.setState({ city: event.target.value });
  }

  handleState(event) {
    this.setState({ state: event.target.value });
  }

  handleCountry(event) {
    this.setState({ country: event.target.value });
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <form className="interview-form">
          <TextField
            style={listStyles}
            label="Company Name"
            value={this.state.company}
            onChange={this.handleCompany}
            fullWidth
          />
          <TextField
            style={listStyles}
            label="Company Website"
            value={this.state.website}
            onChange={this.handleWebsite}
            fullWidth
          />
          <h4>Location</h4>
          <TextField
            style={listStyles}
            label="City"
            value={this.state.city}
            onChange={this.handleCity}
            fullWidth
          />
          <div>
          <TextField
            style={listStyles}
            label="State"
            value={this.state.state}
            onChange={this.handleState}
          />
          <TextField
            style={listStyles}
            label="Country"
            value={this.state.country}
            onChange={this.handleCountry}
          />
          </div>
          <Button
            onClick={this.submitForm}
            variant="contained"
            color="primary"
          >
            Submit
        </Button>
        </form>
      </MuiThemeProvider >
    );
  }
}
