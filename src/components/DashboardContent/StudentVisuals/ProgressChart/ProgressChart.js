import React from 'react';
import {
	LineChart, 
	Line, 
	XAxis, 
	YAxis, 
	CartesianGrid, 
	Tooltip, 
	Legend,
	ResponsiveContainer 
} from 'recharts';

const processData = (studentData) => {
	let output = []
	for (let levelName in studentData) {
		output.push({
			name: levelName,
			studentTimeTaken: studentData[levelName]["playtime"],
			averageTimeTaken: Math.round(studentData[levelName]["average"])
		})
	}
	return output
}

const ProgressChart = ({studentData, timeTakenVisibility, averageVisibility}) => {
	let data = processData(studentData);

	return (
		<ResponsiveContainer width="100%" height={400}>
	  	<LineChart data={data}
	          margin={{top: 5, right: 30, left: 20, bottom: 5}}>
	     <XAxis dataKey="name"/>
	     <YAxis/>
	     <Tooltip/>
	     <Legend/>
	     {timeTakenVisibility && <Line type="monotone" dataKey="studentTimeTaken" name="Time Taken" stroke="#8884d8" activeDot={{r: 8}}/>}
	     {averageVisibility && <Line type="monotone" dataKey="averageTimeTaken" name="Average Cohort Time" stroke="#82ca9d" />}
	    </LineChart>
	  </ResponsiveContainer>
  );
}

export default ProgressChart
