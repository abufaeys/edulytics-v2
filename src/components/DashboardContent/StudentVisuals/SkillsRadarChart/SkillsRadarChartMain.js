import React, { Component } from 'react';
import PentagonChart from './PentagonChart';

export default class SkillsRadarChartMain extends Component {

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>
				<PentagonChart 
					levelStatus={this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId]}
					completedness={this.props.chartsDatabase.Student.assignmentCompletedness.data[this.props.userId]}
					relativeAvgtime={this.props.chartsDatabase.Student.relativeAvgtime.data[this.props.userId]}
					proactiveness={this.props.chartsDatabase.Student.studentProactiveness.data[this.props.userId]}
					effort={this.props.chartsDatabase.Student.normalizedTotalplaytime.data[this.props.userId]}
				/>
			</div>
		)
	}
}