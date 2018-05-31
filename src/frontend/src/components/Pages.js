import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import '../css/Pages.css';
import PageList from './PageList';
import PageEdit from './PageEdit';
import pageItems from '../constants/pages';


export default class Pages extends Component {
  render() {
    const { match } = this.props;
    const baseURL = match.path + (match.path.endsWith('/') ? '' : '/');

    return (
      <div className="pages">
        <h1>Pages</h1>
        <Route exact path={baseURL} component={() => (<PageList pages={pageItems} baseURL={baseURL} />)} />
        <Route path={`${baseURL}edit/:id`} component={PageEdit} />
      </div>
    );
  }
}
