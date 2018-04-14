import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react'
/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

class DataNotFound extends Component {
  refresh(){
    window.location.reload();
  }
  render(){
    return (
      <div align="center">
        <Header as='h4' icon>
          <Icon name='warning sign' />
          Data Not Found<br/>
          <a onClick={this.refresh}>(Click to Refresh)</a>
        </Header>
      </div>
      )
  }
  }

export default DataNotFound