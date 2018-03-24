import React from 'react'
import { Sidebar, Menu, Icon } from 'semantic-ui-react'
import { NavLink } from 'react-router-dom';

/*
  This is the Sidebar.
  Its main purpose is to:
    - Re-render the page according to the feature chosen in the Sidebar
*/

const SidebarLeftOverlay = props => {
    return (
      <Sidebar.Pushable as='body'>
        <Sidebar as={Menu} animation='push' width='thin' visible={props.visible} icon='labeled' vertical inverted>
          <NavLink to='/'>
          <Menu.Item name='home' onClick= {props.setInvisible}>
            <Icon name='home' />
            Home
          </Menu.Item>
          </NavLink>

          <NavLink to='/'>
          <Menu.Item name='gamepad' onClick= {props.setInvisible}>
            <Icon name='gamepad' />
            Games
          </Menu.Item>
          </NavLink>

          <NavLink to='/'>
          <Menu.Item name='camera' onClick= {props.setInvisible}>
            <Icon name='camera' />
            Channels
          </Menu.Item>
          </NavLink>
        </Sidebar>
        <Sidebar.Pusher>
        </Sidebar.Pusher>
      </Sidebar.Pushable>
    )
}

export default SidebarLeftOverlay;