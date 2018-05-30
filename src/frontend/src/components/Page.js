import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import Dashboard from './Dashboard';
import '../css/Page.css';

export default class Page extends Component {
  render() {
    return (
      <div className="page">
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/pages" component={() => (<h1>Pages</h1>)} />
        <Route path="/navigation" component={() => (<h1>Navigation</h1>)} />
        <Route path="/blog" component={() => (<h1>Blog</h1>)} />
        <Route path="/stats" component={() => (<h1>Stats</h1>)} />
        <Route path="/settings" component={() => (<h1>Settings</h1>)} />
      </div>
    );
  }
}
