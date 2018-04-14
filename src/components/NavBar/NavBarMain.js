import React, { Component } from 'react'
import { Container, Menu } from 'semantic-ui-react'
import UserDropdown from './UserDropdown'
import UserSearch from './UserSearch'

/*
  This is the Main template on the navigation bar.
  Its main purpose is to:
    - Display the entire navigation bar
*/


class NavBarMain extends Component{
	render(){
		
		return(
		<Menu pointing secondary size="large">
		    <Container>
				<Menu.Item name="Edulytics" active = {true} icon="fork" onClick={this.props.goHomepage} />
				<Menu.Menu position='right'>
					{this.props.currentActiveUser === "Student" ? <UserSearch style = {{display: "none"}} /> : <UserSearch />}
				  	<UserDropdown currentActiveUser = {this.props.currentActiveUser} toggleActiveUser={this.props.toggleActiveUser} changePage={this.props.changeDashboardPage}/>
				</Menu.Menu>
		    </Container>
		  </Menu>
		  )
	}
}


export default NavBarMain