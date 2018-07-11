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
import dummyDetail from './sampleInterview';
import FirstTimeUser from  './components/FirstTimeUser';
import CompanyForm from './components/CompanyForm'
import SearchBar from './components/SearchBar.jsx';

class App extends Component {
  render() {
    return (
      <Router>
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
            <Link to="/addcompany">Add a Company</Link>
            
          </nav>
          <Switch>
            <Route exact path="/interviews" component={InterviewIndex} />
            <Route exact path="/interviews/new" component={InterviewForm} />
            <Route exact path="/companies" component={CompanyIndex} />
            <Route exact path="/firsttimeuser" component={FirstTimeUser} />
            <Route exact path="/addcompany" component={CompanyForm} />
            <Route
              path="/interviews/:id"
              render={props => (
                <InterviewDetail {...dummyDetail} {...props} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
