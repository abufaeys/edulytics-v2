import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class TotalStudents extends Component{
	render(){
	    var noStudents = this.props.chartsDatabase.CourseInstructor.totalStudents["data"][this.props.courseId];
		return (
			<Statistic label="Total Students" value={noStudents !== undefined ? noStudents : "-"} />
		)
	}
}

export default TotalStudents