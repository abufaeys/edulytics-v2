import React, { Component } from 'react'
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { toggleActiveUser } from '../reducers/navigation'
import NavBarMain from '../components/NavBar/NavBarMain'

/*
  This is the container for Navigation Bar.
  Its main purpose is to:
    - Provide the presentational components with the appropriate functions
    - Collate the presentational components that are in the Navigation Bar
*/

class NavBar extends Component {
	render() {
	  return (
	  	<div>
	  		<NavBarMain 
	  			toggleVisibility = {this.props.toggleVisibility} 
	  			DefaultUser = {this.props.currentActiveUser} 
	  			toggleActiveUser={this.props.toggleActiveUser} 
	  			changeDashboardPage={this.props.changeDashboardPage}
	  			goHomepage={this.props.goHomepage}
	  		/>
		  </div>
	  )
	}
}

const mapStateToProps = state => ({
  currentActiveUser: state.navigation.currentActiveUser,
})

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleActiveUser,
  changeDashboardPage: (user) => push("/" + user),
  goHomepage: () => push('/')
}, dispatch)

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(NavBar)