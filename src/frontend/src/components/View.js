import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import Pages from './Pages';
import Navigation from './Navigation';
import Blog from './Blog';
import '../css/View.css';

export default class View extends Component {
  render() {
    return (
      <div className="page">
        <Route exact path="/" component={Dashboard} />
        <Route path="/page" component={Pages} />
        <Route path="/navigation" component={Navigation} />
        <Route path="/blog" component={Blog} />
        <Route path="/stats" component={() => (<h1>Stats</h1>)} />
        <Route path="/settings" component={() => (<h1>Settings</h1>)} />
      </div>
    );
  }
}
