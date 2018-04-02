import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

/*
	This is the display component for showing each row of assignment that has yet to be completed by a student.
*/	

const AssignmentRow = ({assignment,deadline,details}) => {
	let date = new moment(deadline);
	let dateFormat = date.format("Do MMMM YYYY h:mm A")
	let now = new moment();
	if (date < now) {
		// if past due date, row will be colored red
		return (
			<Table.Row>
				<Table.Cell negative>{assignment}</Table.Cell>
				<Table.Cell negative>{dateFormat}</Table.Cell>
				<Table.Cell negative>{details}</Table.Cell>
			</Table.Row>
		)
	}
	// else, row will be colored green
	return (
		<Table.Row>
			<Table.Cell positive>{assignment}</Table.Cell>
			<Table.Cell positive>{dateFormat}</Table.Cell>
			<Table.Cell positive>{details}</Table.Cell>
		</Table.Row>
	)
}

export default AssignmentRow;