import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import SidebarContainer from './containers/SidebarContainer';
import PageContainer from './containers/PageContainer';

class App extends Component {
  render() {
    console.log(this.props);
    return (
      <BrowserRouter>
        <div className="App">
          <SidebarContainer />
          <PageContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
