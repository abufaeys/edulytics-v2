import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { initialiseDatabases } from '../reducers/firebase';

// Components shown on the main landing page are imported here
import NavBar from "./NavBar";

// Container components for routing are imported here
import Home from './Home';
import DashboardContainer from './DashboardContainer';

class App extends Component {

  componentDidMount(){
    if (this.props.fetchChartsDatabase !== 'FETCHED') {
      this.props.initialiseDatabases();
    }
    
  }
  
  render() {
    return (
      <div>
          <header style={{paddingTop: "10px", height: "50px",}}>
            <NavBar />
          </header>
          <main style = {{paddingTop: "10px"}}>
            <Switch>
              <Route exact path="/" render={(location) => (<Home location={location.location}/>)} />
              <Route exact path="/Student" render={(props) => (<DashboardContainer userType = "Student" />)} />
              <Route exact path="/CourseInstructor" render={(props) => (<DashboardContainer userType = "CourseInstructor" />)} />
              <Route exact path="/CohortAdministrator" render={(props) => (<DashboardContainer userType = "CohortAdministrator" />)} />
              <Route exact path="/SystemAdministrator" render={(props) => (<DashboardContainer userType = "SystemAdministrator" />)} />

              <Route exact path="/Student/:uid" render={(props) => (<DashboardContainer userType = "Student" userId = {props.match.params.uid}/>)} />
              <Route exact path="/CourseInstructor/:uid" render={(props) => (<DashboardContainer userType = "CourseInstructor" userId = {props.match.params.uid}/>)} />
              <Route exact path="/CohortAdministrator/:uid" render={(props) => (<DashboardContainer userType = "CohortAdministrator" userId = {props.match.params.uid}/>)} />
              <Route exact path="/SystemAdministrator/:uid" render={(props) => (<DashboardContainer userType = "SystemAdministrator" userId = {props.match.params.uid}/>)} />

              <Route path="*" render={(props) => (<h1>Not Found</h1>)} />
            </Switch>
          </main>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  fetchChartsDatabase: state.firebase.fetchChartsDatabase,
  location: state.routing.location,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  initialiseDatabases
}, dispatch)

export default withRouter(connect(
  mapStateToProps, 
  mapDispatchToProps
)(App))