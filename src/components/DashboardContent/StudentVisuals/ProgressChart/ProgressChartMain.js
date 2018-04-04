import React, { Component } from 'react';
import ProgressChart from './ProgressChart';
import { Button } from 'semantic-ui-react';


class ProgressChartMain extends Component {

	state = {
		timeTakenVisibility: true,
		averageVisibility: true,
	}

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>

				<ProgressChart 
					studentData={this.props.chartsDatabase.Student.studentlevelPlaytime.data[this.props.userId]}
					timeTakenVisibility = {this.state.timeTakenVisibility}
					averageVisibility = {this.state.averageVisibility}
				/>
				<Button onClick={() => {this.setState({timeTakenVisibility: !this.state.timeTakenVisibility})}}>Toggle Time Taken</Button>
				<Button onClick={() => {this.setState({averageVisibility: !this.state.averageVisibility})}}>Toggle Average Cohort Time</Button>
			</div>
		)		
	}
}

export default ProgressChartMain