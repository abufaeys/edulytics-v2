import React from 'react'
import { Dropdown } from 'semantic-ui-react'

/*
  This is the Dropdown Menu on the navigation bar.
  Its main purpose is to:
    - Change the state of the ActiveUser
    - Re-render the page according to the view chosen
*/

const UserDropdown = (props) => (
	<Dropdown item text={props.DefaultUser}>
  	<Dropdown.Menu>
      <Dropdown.Item 
        text = "Student"
        icon = "student"
        onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text="Course Instructor"
        icon = "user"
    	 	onClick={(event, data) => {
          // trigger change in the page
          props.changePage(data.text.replace(/\s/g, '')); // remove spaces in the text
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text="Cohort Administrator"
        icon="group"
    	 	onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
      <Dropdown.Item 
      	text="System Administrator"
        icon="settings"
    	 	onClick={(event, data) => {
          props.changePage(data.text.replace(/\s/g, ''));
          props.toggleActiveUser(data.text)
        }}/>
  	</Dropdown.Menu>
  </Dropdown>
)

export default UserDropdown