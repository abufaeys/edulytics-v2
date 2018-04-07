import React, { Component } from 'react';
import { ResponsiveContainer } from 'recharts';
import { XYPlot, XAxis, YAxis, HeatmapSeries, Crosshair } from 'react-vis';


class SubmissionByHour extends Component{
	render(){
		var data = [];
		var assignments = this.props.chartsDatabase.CourseInstructor.hoursAssignment["data"][this.props.courseId];
		var assignmentNames = [];
		for (var assignment in assignments){
			assignmentNames.push(assignments[assignment]["assignmentName"]);
		}
		var counter = 1;
		for (var assignmentId in assignments){
			for (var binNo in assignments[assignmentId]["hourCount"]){
				data.push({x:parseInt(binNo) + 1, y: -counter, color: assignments[assignmentId]["hourCount"][binNo]})
			}
			counter += 1;
		}
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
}


export default SubmissionByHour