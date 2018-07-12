import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';
import './App.css';
import InterviewIndex from './components/InterviewIndex';
import InterviewForm from './components/InterviewForm';
import InterviewDetail from './components/InterviewDetail';
import CompanyIndex from './components/CompanyIndex';
import FirstTimeUser from  './components/FirstTimeUser';
import CompanyForm from './components/CompanyForm'
import SearchBar from './components/SearchBar.jsx';
import SearchResults from './components/SearchResults.jsx';
import Button from '@material-ui/core/Button';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import theme from './theme.js';
import CompanyDetail from './components/CompanyDetail'
import dummyDetail from './sampleInterview';
import dummyCompany from './sampleCompany';
import axios from 'axios';


class App extends Component {
  
  logOut() {
    axios.get('/logout')
    .then(function (response) {
      console.log(response);
     })
    .catch(function (error) {
      console.log(error);
  });
  }

  render() {
    return (
      <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <header className="App-header">
            <img src="/cs-logo.png" alt="Codesmith logo" />
            <h1 className="App-title"><Link to="/">Mirror Mirror</Link></h1>
            <p style={{ marginBottom: '0.5em', fontSize: '0.9em' }} >
              <em>A Codesmith Interview Repository</em>
            </p>
            <div>
            <SearchBar/>
            </div>
          </header>
          <nav>
            <Link to="/interviews">View All Interviews</Link>
            <Link to="/interviews/new">Add an Interview</Link>
            <Link to="/companies">View All Companies</Link>
            <Link to="/companies/new">Add a Company</Link>
            <Button variant="outlined" color="secondary" onClick={this.logOut}>
                Log Out
            </Button>
          </nav>
          <Switch>
            <Route exact path="/searchresults" component={SearchResults} />
            <Route exact path="/interviews" component={InterviewIndex} />
            <Route exact path="/interviews/new" component={InterviewForm} />
            <Route exact path="/companies" component={CompanyIndex} />
            <Route exact path="/firsttimeuser" component={FirstTimeUser} />
            <Route exact path="/companies/new" component={CompanyForm} />
            <Route
              path="/interviews/:id"
              render={props => (
                <InterviewDetail {...dummyDetail} {...props} />
              )}
            />
            <Route
              path="/companies/:id"
              render={props => (
                <CompanyDetail {...dummyCompany} {...props} />
              )}
            />
          </Switch>
        </div>
        </MuiThemeProvider>
      </Router>
    );
  }
}

export default App;
