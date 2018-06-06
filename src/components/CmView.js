import React from 'react';
import PropTypes from 'prop-types';
import { Route } from 'react-router-dom';
import '../css/Pages.css';
import PageList from './PageList';
import PageEditContainer from '../containers/PageEditContainer';

const CmView = ({ title, match, onAdd, onUpdate, items, keyPrefix }) => {
  const baseURL = match.path + (match.path.endsWith('/') ? '' : '/');
  let lastId = Math.max(...items.map(i => parseInt(i.id, 10)));
  lastId = Math.max(lastId, 0);

  return (
    <div className="pages">
      <h1>{ title }</h1>
      <Route exact path={baseURL} component={() => (<PageList pages={items} baseURL={baseURL} keyPrefix={keyPrefix} />)} />
      <Route path={`${baseURL}edit/:id`} component={props => (
        <PageEditContainer match={props.match} onChange={onUpdate} items={items} baseURL={baseURL} />
      )} />
      <Route path={`${baseURL}create`} component={props => (
        <PageEditContainer
          id={lastId+1}
          match={props.match}
          history={props.history}
          onChange={onAdd}
          items={items}
          baseURL={baseURL}
        />
      )}
    />
  </div>
  );
};

CmView.propTypes = {
  /**
   * Page title to display at the top of the page
   */
  title: PropTypes.string.isRequired,

  /**
   * Match object, provided by React Router
   */
  match: PropTypes.object,

  /**
   * Function to call when a new item is added
   */
  onAdd: PropTypes.func.isRequired,

  /**
   * Function to call when an item is updated
   */
  onUpdate: PropTypes.func.isRequired,

  /**
   * List of items to operate on
   */
  items: PropTypes.array.isRequired,
};

export default CmView;
