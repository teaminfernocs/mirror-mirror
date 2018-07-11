import React from 'react';
import LabeledText from './LabeledText';
import Button from '@material-ui/core/Button';
import theme from '../theme.js';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';

const fakeInterviews = [{
  displayName: 'Joe Thel',
  position: 'DevOps',
  type: 'On-site',
  company: 'Google',
  date: '2018-07-05',
},{
  displayName: 'Nate Grossman',
  position: 'Front end engineer',
  type: 'Phone-Screen',
  company: 'Google',
  date: '2018-07-04',
},]


const CompanyDetail = props => (
  <MuiThemeProvider theme={theme}>
    <div className="interview-detail">
      <h1>{props.company_name}</h1>
      <h2>Location</h2>
      <div className="one-line">
        <LabeledText label="City" text={props.company_city} />
        <LabeledText label="State" text={props.company_state} />
        <LabeledText label="Country" text={props.company_country} />
      </div>
      <br/>
      <Button variant="contained" color="primary" href={'http://'+ props.company_website}>Website</Button>
      <h2>Recent Interviews at {props.company_name}</h2>
      <ul>
        {
          //reconfigure to make query once database is setup
          fakeInterviews.map(interview =>
            <li key={interview}>
                <a href='#'>{interview.type} interview for {interview.position} position on {interview.date}</a>
            </li>)
        }
      </ul>
    </div>
  </MuiThemeProvider>
);

export default CompanyDetail;
