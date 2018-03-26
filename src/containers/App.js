import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

// Components shown on the main landing page are imported here
import SidebarLeftOverlay from "../components/Sidebar/sidebar";
import NavBar from "./NavBar";

// Container components for routing are imported here
import Home from './Home';
import DashboardContainer from './DashboardContainer';


class App extends Component {
  state = { visible: false }

  toggleVisibility = () => this.setState({ visible: !this.state.visible })

  render() {
    const { visible } = this.state;

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
