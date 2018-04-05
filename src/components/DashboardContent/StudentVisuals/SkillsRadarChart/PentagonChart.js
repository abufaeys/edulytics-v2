import React from 'react';
import {
	Radar, 
	RadarChart, 
	PolarGrid, 
	PolarAngleAxis, 
	PolarRadiusAxis,
	ResponsiveContainer,
	Tooltip
} from 'recharts';



const PentagonChart = ({levelStatus, completedness, relativeAvgtime, proactiveness, effort}) => {
	const data = [
	    { subject: 'Level Status', A: Math.round(levelStatus*100)},
	    { subject: 'Completedness', A: Math.round(completedness*100)},
	    { subject: 'average time', A: 100-Math.round(relativeAvgtime*100)},
	    { subject: 'proactiveness', A: Math.round(proactiveness*100)},
	    { subject: 'effort', A: Math.round(effort.self*100)},
	    { subject: 'Youtube', A: 65},
	];	

	return (
		<ResponsiveContainer width="100%" height={500}>
	  	<RadarChart outerRadius={150} data={data}>
	      <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6}/>
	      <PolarGrid />
	      <Tooltip/>
	      <PolarAngleAxis dataKey="subject" />
	      <PolarRadiusAxis angle={60} domain={['auto', 'auto']}/>
	    </RadarChart>
	  </ResponsiveContainer>
  );	
}

export default PentagonChart;