import React from 'react';
import { Table } from 'semantic-ui-react';
import AssignmentRow from "./AssignmentRow";

/*
	This is the display component for showing the assignments that have yet to be completed by the student.
*/	

const getAssignments = (chartsDatabase, userId) => {
	let data = chartsDatabase.Student.assignmentsDue[userId];
	let assignments = []
	for (let course in data) {
		for (let assignment in data[course]) {
			if (data[course][assignment] !== false) {
				assignments.push(data[course][assignment]);
			}
		}
	}
	return assignments
}

const AssignmentTracker = ({chartsDatabase, userId}) => {
	let data = getAssignments(chartsDatabase,userId);
	return (
		<Table compact celled >
		  <Table.Header>
		    <Table.Row>
		      <Table.HeaderCell>Assignment</Table.HeaderCell>
		      <Table.HeaderCell>Due Date</Table.HeaderCell>
		      <Table.HeaderCell>Details</Table.HeaderCell>
		    </Table.Row>
		  </Table.Header>
		  <Table.Body>
		  	{data.map(item => <AssignmentRow assignment={item.name} deadline={item.deadline} details={item.details} />)}
		  </Table.Body>
		</Table>
	)
}

export default AssignmentTracker