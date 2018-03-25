import React, { Component } from 'react';
import { Route } from 'react-router-dom';

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
          <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/Student/dashboard" render={(props) => (<DashboardContainer userType = "Student" />)} />
            <Route exact path="/CourseInstructor/dashboard" render={(props) => (<DashboardContainer userType = "CourseInstructor" />)} />
            <Route exact path="/CohortAdministrator/dashboard" render={(props) => (<DashboardContainer userType = "CohortAdministrator" />)} />
            <Route exact path="/SystemAdministrator/dashboard" render={(props) => (<DashboardContainer userType = "SystemAdministrator" />)} />
          </div>
        </main>
      </div>
    );
  }
}



export default App;
