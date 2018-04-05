import React, {Component} from 'react';
import { Statistic } from 'semantic-ui-react';

/*
	This is the display component for showing the total number of levels completed for a student.
*/	

class AverageLevelsCompleted extends Component{
	render(){
	    var averageLevelsValue = this.props.chartsDatabase.CourseInstructor.averageLevels["data"][this.props.courseId]
		return (
			<Statistic label="Average Levels Completed" value={averageLevelsValue !== undefined ? averageLevelsValue : 0} />
		)
	}
}

export default AverageLevelsCompleted