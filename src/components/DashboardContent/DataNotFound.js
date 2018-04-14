import React, { Component } from 'react';
import { Card } from 'semantic-ui-react'
/*
  This is the main template for each of the dashboard we will do.
  This file is only to be changed if:
    - Changes are needed for the general dashboard layout

  For more info on Grids, link is here: https://react.semantic-ui.com/collections/grid#grid-example-divided-number
*/

class DataNotFound extends Component {
  render(){
    return (
          <Card fluid stretched>
            <h1 style={{"align":"center"}}>No Data Available</h1>
          </Card>
      )
  }
  }

export default DataNotFound