import React, { Component } from 'react';
import ProgressChart from './ProgressChart';
import { Button } from 'semantic-ui-react';


class ProgressChartMain extends Component {

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>

				<ProgressChart 
					studentData={this.props.chartsDatabase.Student.levelPlaytime.data[this.props.userId]}
					cohortData={this.props.chartsDatabase.CourseInstructor.levelAttempt.data}
				/>
				<Button>dsdsa</Button>
			</div>
		)		
	}
}

export default ProgressChartMain