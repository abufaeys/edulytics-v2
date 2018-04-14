import React, { Component } from 'react';
import { Header, Icon } from 'semantic-ui-react';


class InvalidRoute extends Component {
  refresh(){
    window.location.reload();
  }
  render(){
    return (
      <div align="center" style={{"padding":"2em"}}>
        <Header as='h1' icon>
          <Icon name='warning sign' />
          Invalid Route
        </Header>
          <Header.Subheader>
            You might have clicked on a wrong link or selected an invalid user.<br/>
            <a onClick={this.refresh} style={{"cursor":"pointer"}}>Refresh</a> or search for another user.
          </Header.Subheader>
      </div>
      )
  }
  }

export default InvalidRoute