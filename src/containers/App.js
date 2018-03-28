import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components shown on the main landing page are imported here
import SidebarLeftOverlay from "../components/Sidebar/sidebar";
import NavBar from "./NavBar";

// Container components for routing are imported here
import Home from './Home';
import DashboardContainer from './DashboardContainer';

import firebase from 'firebase';
import store from '../store'; // to be changed to connect


class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  componentDidMount(){
    var config = {
      apiKey: "AIzaSyC1r8Jm7C_3Q_cAAY0cGP2-lydfL8SK130",
      authDomain: "edulytics-437a6.firebaseapp.com",
      databaseURL: "https://edulytics-437a6.firebaseio.com",
      projectId: "edulytics-437a6",
      storageBucket: "edulytics-437a6.appspot.com",
      messagingSenderId: "631017845483"
    };
    firebase.initializeApp(config);

    var db = firebase.database();
    db.ref("/Static").on("value", data => {
      if (data.val()) {
        store.dispatch({type:"INITIALISE_STATIC_DATABASE", payload: data.val()});
      }
    });
    db.ref("/Charts").on("value", data => {
      if (data.val()) {
        store.dispatch({type:"INITIALISE_CHARTS_DATABASE", payload: data.val()});
      }
    });
  }

  render() {
    const { visible } = this.state.visible;
    return (
      <div>
          <SidebarLeftOverlay visible={visible} setInvisible={this.toggleVisibility}/>
        <main>
          <header style={{paddingTop: "10px", minHeight: "50px",}}>
            <NavBar toggleVisibility = {this.toggleVisibility}/>
          </header>
          <Switch>
            <Route exact path="/" component={Home} />
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


export default App;
