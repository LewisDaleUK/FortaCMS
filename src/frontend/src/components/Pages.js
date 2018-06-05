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
    const lastId = Math.max(...pageItems.map(i => parseInt(i.id, 10)));

    return (
      <div className="pages">
        <h1>Pages</h1>
        <Route exact path={baseURL} component={() => (<PageList pages={pageItems} baseURL={baseURL} />)} />
        <Route path={`${baseURL}edit/:id`} component={PageEdit} />
        <Route path={`${baseURL}create`} component={props => (
          <PageEdit
            id={lastId+1}
            match={props.match}
            history={props.history}
          />
        )} />
    </div>
    );
  }
}
