import React from 'react'
import { Dropdown } from 'semantic-ui-react'

/*
  This is the Dropdown Menu on the navigation bar.
  Its main purpose is to:
    - Change the state of the ActiveUser
    - Re-render the page according to the view chosen
*/

const DropdownMenu = (props) => (
	<Dropdown item text='Change User'>
  	<Dropdown.Menu>
      <Dropdown.Item 
      	text='Course instructor'
    	 	onClick={(event, data) => {
          // trigger change in the page
          props.changePage(data.text.replace(/\s/g, '')); // remove spaces in the text
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text='Student'
    	 	onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text='Cohort Administrator'
    	 	onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text='System Administrator'
    	 	onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
  	</Dropdown.Menu>
  </Dropdown>
)

export default DropdownMenu