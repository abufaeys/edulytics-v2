import React, { Component } from 'react';

import { ResponsiveContainer } from 'recharts';
import { XYPlot, XAxis, YAxis, HeatmapSeries } from 'react-vis';
import DataNotFound from '../DataNotFound';


class SubmissionDistribution extends Component{
	render(){
		var data = [];
		var assignments = this.props.chartsDatabase.CourseInstructor.assignmentDis["data"][this.props.courseId];
		/*for (var assignment in assignments){
			assignmentNames.push(assignments[assignment]["assignmentName"]);
		}*/
		var counter = 1;
		for (var assignmentId in assignments){
			for (var binNo in assignments[assignmentId]){
				data.push({x:parseInt(binNo), y: -counter, color: assignments[assignmentId][binNo]})
			}
			counter += 1;
		}
		if (data.length >= 1){
			return (
				<ResponsiveContainer width="100%" height={600}>
				
			  		<XYPlot
					  width={300}
					  height={300}>
					  <XAxis />
					  <YAxis />
					  <HeatmapSeries
					    className="heatmap-series-example"
					    colorRange={["white", "#82ca9d"]}
					    data={data}/>
					</XYPlot>
					</ResponsiveContainer>
				);
		}
		else{
			return (
				<DataNotFound />
				);
		}
		
	}
}


export default SubmissionDistribution