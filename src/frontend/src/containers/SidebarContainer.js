import React, { Component } from 'react';
import Sidebar from '../components/Sidebar';

export default class SidebarContainer extends Component {
  state = {
    'visible': true,
  };

  render() {
    return (
      <Sidebar
        visible={this.state.visible}
        onVisibleChange={() => this.setState({ visible: !this.state.visible })}
      />
    );
  }
}
