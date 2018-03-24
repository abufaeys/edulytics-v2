import React from 'react'
import { Container, Menu } from 'semantic-ui-react'
import DropdownMenu from './DropdownMenu'

/*
  This is the Main template on the navigation bar.
  Its main purpose is to:
    - Display the entire navigation bar
*/

const Navbar = (props) => (
  <Menu fixed='top' inverted>
    <Container>
	  	<Menu.Menu position='left'>
		  	<Menu.Item>
		  		Edulytics
		  	</Menu.Item>
		  </Menu.Menu>
      <Menu.Menu position='right'>
		  	<Menu.Item active={false} onClick={props.toggleVisibility}>
		  		Options
		  	</Menu.Item>
		  		<DropdownMenu toggleActiveUser={props.toggleActiveUser} changePage={props.changeDashboardPage}/>
      </Menu.Menu>
    </Container>
  </Menu>
)


export default Navbar