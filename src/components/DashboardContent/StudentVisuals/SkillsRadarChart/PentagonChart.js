import React from 'react';
import {
	Radar, 
	RadarChart, 
	PolarGrid, 
	PolarAngleAxis, 
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip,
	Legend
} from 'recharts';



const PentagonChart = ({levelStatus, completedness, relativeAvgtime, proactiveness, effort, diligence, average, studentName}) => {
	const data = [
	    { subject: 'Hardworking', A: Math.round(levelStatus*100)},
	    { subject: 'Dedication', A: Math.round(completedness*100)},
	    { subject: 'Mastery', A: 100-Math.round(relativeAvgtime["self"]*100)},
	    { subject: 'Proactive', A: Math.round(proactiveness*100)},
	    { subject: 'Effort', A: Math.round(effort.self*100)},
	    { subject: 'Diligence', A: Math.round(diligence*100)},
	];	

	for (let i=0;i<average.length;i++) {
		data[i]['B'] = average[i];
	}

	return (
		<ResponsiveContainer width="100%" height={500}>
	  	<RadarChart outerRadius={150} data={data}>
	      <Radar name={studentName} dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
	      <Radar name="Course Average" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
	      <PolarGrid />
	      <Tooltip/>
	      <PolarAngleAxis dataKey="subject" />
	      <PolarRadiusAxis angle={60} domain={[0, 100]}/>
	      <Legend />
	    </RadarChart>
	  </ResponsiveContainer>
  );	
}

export default PentagonChart;