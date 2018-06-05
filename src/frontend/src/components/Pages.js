import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Pages.css';
import PageList from './PageList';
import PageEdit from './PageEdit';
import { addPage, updatePage } from '../actions/PageActions';

const Pages = ({ match, onPageAdd, onPageUpdate, pages}) => {
  const baseURL = match.path + (match.path.endsWith('/') ? '' : '/');
  let lastId = Math.max(...pages.map(i => parseInt(i.id, 10)));
  lastId = Math.max(lastId, 0);

  return (
    <div className="pages">
      <h1>Pages</h1>
      <Route exact path={baseURL} component={() => (
        <PageList pages={pages} baseURL={baseURL} keyPrefix='page' />
      )} />
      <Route path={`${baseURL}edit/:id`} component={props => (
        <PageEdit match={props.match} onChange={onPageUpdate} />
      )} />
      <Route path={`${baseURL}create`} component={props => (
        <PageEdit id={lastId+1} match={props.match} history={props.history} onChange={onPageAdd} />
      )}
    />
  </div>
  );
};

const mapStateToProps = state => ({
  pages: state.pages,
});

const dispatchToProps = dispatch => ({
  onPageAdd: page => dispatch(addPage(page)),
  onPageUpdate: page => dispatch(updatePage(page)),
});

export default connect(mapStateToProps, dispatchToProps)(Pages);
