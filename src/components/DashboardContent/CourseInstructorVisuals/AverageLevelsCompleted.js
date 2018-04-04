import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class AverageLevelsCompleted extends Component{
	render(){
		for (var course in this.props.chartsDatabase.CourseInstructor.averageLevels["data"]){
	        if (this.props.staticDatabase.CourseList[course]["instructorId"] == this.props.userId){
	          var courseId = course;
	          break;
	        }
	    }
	    var averageLevelsValue = this.props.chartsDatabase.CourseInstructor.averageLevels["data"][courseId]
		return (
			<Statistic label="Average Levels Completed" value={averageLevelsValue !== undefined ? averageLevelsValue : 0} />
		)
	}
}

export default AverageLevelsCompleted