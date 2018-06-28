import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Pages from './Pages';
import Navigation from './Navigation';
import Blog from './Blog';
import Stats from './Stats';
import UserView from './UserView';
import '../css/View.css';

const View = () => (
  <div className="page">
    <Route exact path="/" component={Dashboard} />
    <Route path="/page" component={Pages} />
    <Route path="/navigation" component={Navigation} />
    <Route path="/blog" component={Blog} />
    <Route path="/stats" component={Stats} />
    <Route path="/user" component={UserView} />
    <Route path="/settings" component={() => (<h1>Settings</h1>)} />
  </div>
);

export default View;
