import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './css/App.css';
import SidebarContainer from './containers/SidebarContainer';
import PageContainer from './containers/PageContainer';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <SidebarContainer />
      <PageContainer />
    </div>
  </BrowserRouter>
);

export default App;
