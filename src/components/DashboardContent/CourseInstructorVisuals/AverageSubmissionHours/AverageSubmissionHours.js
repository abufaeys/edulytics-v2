import React from 'react';
import {
	LineChart, 
	Line, 
	XAxis, 
	YAxis,  
	Tooltip, 
	Legend,
	ResponsiveContainer 
} from 'recharts';


const AverageSubmissionHours = (props) => {
	var assignments = props.chartsDatabase.CourseInstructor.hoursAssignment["data"][props.courseId][props.assignmentId];
	var data = [];
	for (var hour in assignments["hourCount"]){
		var submissionTimeCount = {"hour":hour, "count":assignments["hourCount"][hour]};
		data.push(submissionTimeCount);
	}
	return (
		<ResponsiveContainer width="100%" height={300}>
	  	<LineChart data={data}
	          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	     <XAxis dataKey="hour"/>
	     <YAxis/>
	     <Tooltip/>
	     <Legend/>
	     <Line type="monotone" dataKey="count" name="Count" stroke="#8884d8" activeDot={{r: 8}}/>}
	    </LineChart>
	  </ResponsiveContainer>
  );
}

export default AverageSubmissionHours
