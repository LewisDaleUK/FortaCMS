import React from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Pages from './Pages';
import Navigation from './Navigation';
import Blog from './Blog';
import Stats from './Stats';
import '../css/View.css';

const View = () => (
  <div className="page">
    <Route exact path="/" component={Dashboard} />
    <Route path="/page" component={Pages} />
    <Route path="/navigation" component={Navigation} />
    <Route path="/blog" component={Blog} />
    <Route path="/stats" component={Stats} />
    <Route path="/users" component={() => (<h1>Users</h1>)} />
    <Route path="/settings" component={() => (<h1>Settings</h1>)} />
  </div>
);

export default View;
