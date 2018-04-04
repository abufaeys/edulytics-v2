import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class TotalStudents extends Component{
	render(){
		for (var course in this.props.chartsDatabase.CourseInstructor.averageLevels["data"]){
	        if (this.props.staticDatabase.CourseList[course]["instructorId"] == this.props.userId){
	          var courseId = course;
	          break;
	        }
	    }
	    var noStudents = this.props.chartsDatabase.CourseInstructor.totalStudents["data"][courseId];
		return (
			<Statistic label="Total Students" value={noStudents !== undefined ? noStudents : 0} />
		)
	}
}

export default TotalStudents