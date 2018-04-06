import React, { Component } from 'react';
import { Table, Button } from 'semantic-ui-react';
import _ from 'lodash';
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

class MissionTableMain extends Component {
  state = {
    column: null,
    data: formatData(this.props.studentData),
    direction: null,
  }

	componentWillReceiveProps(nextProps) {
		this.setState({data: formatData(nextProps.studentData)})
	}
	
  handleSort = clickedColumn => () => {
    const { column, data, direction } = this.state

    if (column !== clickedColumn) {
      this.setState({
        column: clickedColumn,
        data: _.sortBy(data, [clickedColumn]),
        direction: 'ascending',
      })

      return
    }

    this.setState({
      data: data.reverse(),
      direction: direction === 'ascending' ? 'descending' : 'ascending',
    })
  }


	render() {
		const { column, data, direction } = this.state
		
		return (
			<div style={{height:"200px", overflow:"scroll", width:"100%"}}>
				<Table compact celled sortable>
				  <Table.Header>
				    <Table.Row>
				      <Table.HeaderCell sorted={column === 'name' ? direction : null} onClick={this.handleSort('name')}>
				      	Level Name
			      	</Table.HeaderCell>
				      <Table.HeaderCell sorted={column === 'studentTimeTaken' ? direction : null} onClick={this.handleSort('studentTimeTaken')}>
				      	Time Taken
			      	</Table.HeaderCell>
				      <Table.HeaderCell sorted={column === 'averageTimeTaken' ? direction : null} onClick={this.handleSort('averageTimeTaken')}>
				      	Average Time Taken
			      	</Table.HeaderCell>
				    </Table.Row>
				  </Table.Header>
				  <Table.Body>
				  	{data.map(item => 
				  		<MissionRow 
				  			key={item.name}
				  			name={item.name} 
				  			playtime={item.studentTimeTaken} 
				  			averagePlaytime={item.averageTimeTaken} 
			  			/>)}
				  </Table.Body>
				</Table>		
			</div>
		)
	}
}

export default MissionTableMain
