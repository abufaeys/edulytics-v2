import React, { Component } from 'react';
import PentagonChart from './PentagonChart';

export default class SkillsRadarChartMain extends Component {

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>
				<PentagonChart 
					levelStatus={this.props.chartsDatabase.Student.studentlevelStatus.data[this.props.userId]}
				/>
			</div>
		)
	}
}