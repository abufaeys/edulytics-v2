import React from 'react'
import { Container, Menu, Dropdown } from 'semantic-ui-react'
import UserDropdown from './UserDropdown'

/*
  This is the Main template on the navigation bar.
  Its main purpose is to:
    - Display the entire navigation bar
*/

const Navbar = (props) => (
  <Menu pointing secondary size="large">
    <Container>
		<Menu.Item name="Edulytics" active = {true} icon="fork" onClick={props.goHomepage} />
      <Menu.Menu position='right'>
		  	<UserDropdown DefaultUser = {props.DefaultUser} toggleActiveUser={props.toggleActiveUser} changePage={props.changeDashboardPage}/>
		  	<Dropdown item icon="options">
			  	<Dropdown.Menu>
			    	<Dropdown.Item text="Settings" icon="setting" />
			    	<Dropdown.Item text="Settings2" icon="settings" />
			  	</Dropdown.Menu>
		  	</Dropdown>
      </Menu.Menu>
    </Container>
  </Menu>
)


export default Navbar