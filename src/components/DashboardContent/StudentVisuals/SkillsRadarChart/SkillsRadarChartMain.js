import React, { Component } from 'react';
import PentagonChart from './PentagonChart';

export default class SkillsRadarChartMain extends Component {

	render() {
		return (
			<div style={{width:"100%",height:"100%"}}>
				<PentagonChart />
			</div>
		)
	}
}