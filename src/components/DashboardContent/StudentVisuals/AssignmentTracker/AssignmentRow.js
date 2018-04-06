import React from 'react';
import moment from 'moment';
import { Table } from 'semantic-ui-react';

/*
	This is the display component for showing each row of assignment that has yet to be completed by a student.
*/	

const AssignmentRow = ({assignment,deadline,details}) => {
	let date = new moment(deadline);
	let dateFormat = date.format("Do MMMM YYYY h:mm A");
	
	return (
		<Table.Row>
			<Table.Cell style={{wordWrap: 'break-word'}}>{assignment}</Table.Cell>
			<Table.Cell style={{wordWrap: 'break-word'}}>{dateFormat}</Table.Cell>
			<Table.Cell style={{wordWrap: 'break-word'}}>{details}</Table.Cell>
		</Table.Row>
	)

}

export default AssignmentRow;