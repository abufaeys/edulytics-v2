import React, { Component } from 'react';
import DashboardMain from '../../components/Dashboard/DashboardMain'

/*
  This is the container for Student's Dashboard.
  Its main purpose is to:
    - Render the dashboards that students will view
  	- Collate the visualisation components for students
*/

class StudentDashboard extends Component {
	render() {
	  return (
	  	<div>
		    <h1>Student Dashboard</h1>
		    <DashboardMain />
		  </div>
	  )
	}
}

export default StudentDashboard;