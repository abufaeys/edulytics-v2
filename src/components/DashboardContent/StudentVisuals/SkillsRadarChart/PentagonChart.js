import React from 'react';
import {
	Radar, 
	RadarChart, 
	PolarGrid, 
	Legend,
	PolarAngleAxis, 
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip
} from 'recharts';



const PentagonChart = ({levelStatus}) => {
	const data = [
	    { subject: 'Level Status', A: Math.round(levelStatus*100), B: 11},
	    { subject: 'Chinese', A: 98, B: 56},
	    { subject: 'English', A: 86, B: 13},
	    { subject: 'Geography', A: 99, B: 70},
	    { subject: 'Physics', A: 85, B: 90},
	    { subject: 'History', A: 65, B: 85},
	];	

	return (
		<ResponsiveContainer width="100%" height={500}>
	  	<RadarChart outerRadius={150} data={data}>
	      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
	      <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6}/>
	      <PolarGrid />
	      <Tooltip/>
	      <Legend />
	      <PolarAngleAxis dataKey="subject" />
	      <PolarRadiusAxis angle={30} domain={['auto', 'auto']}/>
	    </RadarChart>
	  </ResponsiveContainer>
  );	
}

export default PentagonChart;