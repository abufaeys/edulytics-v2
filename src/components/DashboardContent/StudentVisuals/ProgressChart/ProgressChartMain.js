import React, { Component } from 'react';
import ProgressChart from './ProgressChart';
import { Header } from 'semantic-ui-react';

import MissionTableMain from '../MissionTable/MissionTableMain';

class ProgressChartMain extends Component {

	state = {
		timeTakenVisibility: true,
		averageVisibility: true,
	}

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>
				<Header as="h1" textAlign="center">Codecombat Level Progress Tracker</Header>
				<ProgressChart 
					studentData={this.props.chartsDatabase.Student.studentlevelPlaytime.data[this.props.userId]}
					timeTakenVisibility = {this.state.timeTakenVisibility}
					averageVisibility = {this.state.averageVisibility}
				/>
				<MissionTableMain studentData={this.props.chartsDatabase.Student.studentlevelPlaytime.data[this.props.userId]} />
			</div>
		)		
	}
}

export default ProgressChartMain