import React from 'react';
import { Table, Sticky, Visibility } from 'semantic-ui-react';
import MissionRow from './MissionTableRow';

const formatData = (studentData) => {
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

const MissionTableMain = ({studentData}) => {

	let data = formatData(studentData);

	return (
		<div style={{height:"600px", overflow:"scroll"}}>
			<Table compact celled sortable>
			  <Table.Header>
			    <Table.Row>
			      <Table.HeaderCell>Level Name</Table.HeaderCell>
			      <Table.HeaderCell>Time Taken</Table.HeaderCell>
			      <Table.HeaderCell>Average Time Taken</Table.HeaderCell>
			    </Table.Row>
			  </Table.Header>
			  <Table.Body>
			  	{data.map(item => <MissionRow name={item.name} playtime={item.studentTimeTaken} averagePlaytime={item.averageTimeTaken} />)}
			  </Table.Body>
			</Table>		
		</div>
	)
}

export default MissionTableMain
