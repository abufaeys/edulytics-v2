import React, { Component } from 'react';
import StudentContentMain from '../components/DashboardContent/StudentContentMain'
import CourseInstructorContentMain from '../components/DashboardContent/CourseInstructorContentMain'
import CohortAdministratorContentMain from '../components/DashboardContent/CohortAdministratorContentMain'
import SystemAdministratorContentMain from '../components/DashboardContent/SystemAdministratorContentMain'

/*
  This is the container for Student's Dashboard.
  Its main purpose is to:
    - Render the dashboards that students will view
  	- Collate the visualisation components for students
*/

class DashboardContainer extends Component {


	render() {
		var userType = this.props.userType;
		var userId = this.props.userId;
		const dashboardDict = {"Student": StudentContentMain,
								"CourseInstructor": CourseInstructorContentMain,
								"CohortAdministrator": CohortAdministratorContentMain,
								"SystemAdministrator": SystemAdministratorContentMain};
		var UserDashboard = dashboardDict[userType];
	  return (
	  	<div>
	  		{userId == null ?
	  		(<h1>{userType} Dashboard (default)</h1>
	  			):
	  		(
	  			<h1>{userType} Dashboard ({userId})</h1>
	  			)
	  		}
		    <UserDashboard userId = {userId} />
		  </div>
	  )
	}
}

export default DashboardContainer;