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
import dummyDetail from '../sampleInterview';

const testQuery = [{company_name: 'Google', company_website: 'www.google.com', company_city:'Palo Alto', company_state:'CA', company_country: 'USA'},
                  {company_name: 'Apple', company_website: 'www.apple.com', company_city:'Cupertino', company_state:'CA', company_country: 'USA'}]

export default class CompanyIndex extends Component {
  constructor() {
    super();
    this.state = {
      list: [],
    };
  }

  componentDidMount() {
    this.setState({ list: testQuery })
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Table className="interview-index">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Website</TableCell>
              <TableCell>City</TableCell>
              <TableCell>State</TableCell>
              <TableCell>Country</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {
              this.state.list.map((item, idx) => (
                <TableRow key={idx}>
                  <TableCell>{item.company_name}</TableCell>
                  <TableCell>{item.company_website}</TableCell>
                  <TableCell>{item.company_city}</TableCell>
                  <TableCell>{item.company_state}</TableCell>
                  <TableCell>{item.company_country}</TableCell>
                  <TableCell>
                    <Link to={`companies/${idx}`}>
                      <Button variant="contained" color="primary">Go</Button>
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
 