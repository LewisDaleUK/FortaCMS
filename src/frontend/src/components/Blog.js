import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/Pages.css';
import PageList from './PageList';
import PageEdit from './PageEdit';
import blogItems from '../constants/blogs';

export default class Blog extends Component {
  render() {
    const { match } = this.props;
    const baseURL = match.path + (match.path.endsWith('/') ? '' : '/');
    const lastId = Math.max(...blogItems.map(i => parseInt(i.id, 10)));

    return (
      <div className="pages">
        <h1>Blog</h1>
        <Route exact path={baseURL} component={() => (<PageList pages={blogItems} baseURL={baseURL} />)} />
        <Route path={`${baseURL}edit/:id`} component={PageEdit} />
        <Route path={`${baseURL}create`} component={props => (<PageEdit id={lastId+1} match={props.match} history={props.history} />)} />
      </div>
    );
  }
}

