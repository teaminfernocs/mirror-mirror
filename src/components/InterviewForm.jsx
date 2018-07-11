/* globals document */
import React, { Component } from 'react';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import OptionButtons from './OptionButtons';
import ListField from './ListField';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from '../theme';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';

const fakeCompanyQuery = [
  {id: 0, company_name: 'Google'},
  {id: 1, company_name: 'Apple'},
  {id: 2, company_name: 'Bird'},
  {id: 3, company_name: 'Solo'},
]

let questionCounter = 0;

const listStyles = {
  marginBottom: '2em',
};

const serializeForm = state => ({
  company: state.company,
  position: state.position,
  type: state.type,
  notes: state.notes,
  questions: state.questionList.map(val => val.question),
  date: state.date,
});

export default class InterviewForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      company: '',
      position: 'Full Stack',
      type: 'On-site',
      notes: '',
      question: '',
      questionList: [],
      date: new Date().toISOString().slice(0, 10),
      allCompanies: []
    };

    this.handleCompany = this.handleCompany.bind(this);
    this.captureType = this.captureType.bind(this);
    this.capturePosition = this.capturePosition.bind(this);
    this.handleNotes = this.handleNotes.bind(this);
    this.handleQuestion = this.handleQuestion.bind(this);
    this.handleDate = this.handleDate.bind(this);
    this.handleAddQuestion = this.handleAddQuestion.bind(this);
    this.handleRemoveQuestion = this.handleRemoveQuestion.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleCompany(event) {
    this.setState({ company: event.target.value });
  }

  captureType(option) {
    this.setState({ type: option });
  }

  capturePosition(option) {
    this.setState({ position: option });
  }

  handleNotes(event) {
    this.setState({ notes: event.target.value });
  }

  handleQuestion(event) {
    this.setState({ question: event.target.value });
  }

  handleAddQuestion() {
    document.getElementById('question-field').focus();
    if (this.state.question !== '') {
      this.setState({
        questionList: [
          ...this.state.questionList,
          {
            question: this.state.question,
            id: questionCounter,
          },
        ],
        question: '',
      });
      questionCounter += 1;
    }
  }

  handleRemoveQuestion(event) {
    const id = parseInt(event.target.id.slice(9), 10);
    this.setState({
      questionList: [
        ...this.state.questionList.slice(0, id),
        ...this.state.questionList.slice(id + 1),
      ],
    });
  }

  handleDate(event) {
    this.setState({ date: event.target.value });
  }

  submitForm() {
    console.log(serializeForm(this.state));
    axios.post('/interview', serializeForm(this.state))
      .then(console.log)
      .catch(console.error);
  }

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <form className="interview-form">
          <div style={listStyles} className="one-line">
            <Select
              value={this.state.company}
              onChange={this.handleCompany}
              inputProps={{
                name: 'company',
                id: 'company',
              }}
            >
              {
                //should be this.state.allCompanies once db functionality is in place
                fakeCompanyQuery.map((company) => (
                <MenuItem value={company.id}>{company.company_name}</MenuItem>
                ))
              }
            </Select>
            <TextField
              label="Date"
              type="date"
              value={this.state.date}
              onChange={this.handleDate}
            />
          </div>
          <OptionButtons
            style={listStyles}
            label="What sort of position did you apply for?"
            value={this.state.position}
            onChange={this.capturePosition}
            options={[
              'Full Stack',
              'Front End',
              'Back End',
              'DevOps',
            ]}
            required
            allowCustom
          />
          <OptionButtons
            style={listStyles}
            label="What kind of interview was it?"
            value={this.state.type}
            onChange={this.captureType}
            options={[
              'On-site',
              'Phone/video chat',
              'Coding challenge',
              'Take-home',
            ]}
            required
            allowCustom
          />
          <ListField
            style={listStyles}
            subheader="Questions"
            label="What questions were most notable?"
            fieldValue={this.state.question}
            listValues={this.state.questionList}
            onChange={this.handleQuestion}
            onAdd={this.handleAddQuestion}
            onRemove={this.handleRemoveQuestion}
            multiline
            required
          />
          <TextField
            style={listStyles}
            label="General notes"
            value={this.state.notes}
            onChange={this.handleNotes}
            fullWidth
            multiline
          />
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
