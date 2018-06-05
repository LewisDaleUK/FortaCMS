import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/Pages.css';
import PageList from './PageList';
import PageEdit from './PageEdit';
import { addBlog, updateBlog } from '../actions/BlogActions';

const Blog = ({ match, onBlogAdd, onBlogUpdate, blogs }) => {
  const baseURL = match.path + (match.path.endsWith('/') ? '' : '/');
  let lastId = Math.max(...blogs.map(i => parseInt(i.id, 10)));
  lastId = Math.max(lastId, 0);

  return (
    <div className="pages">
      <h1>Blog</h1>
      <Route exact path={baseURL} component={() => (<PageList pages={blogs} baseURL={baseURL} keyPrefix='blog' />)} />
      <Route path={`${baseURL}edit/:id`} component={props => (
        <PageEdit match={props.match} onChange={onBlogUpdate} />
      )} />
      <Route path={`${baseURL}create`} component={props => (
        <PageEdit id={lastId+1} match={props.match} history={props.history} onChange={onBlogAdd} />
      )}
    />
  </div>
  );
};

const mapStateToProps = state => ({
  blogs: state.blogs,
});

const dispatchToProps = dispatch => ({
  onBlogAdd: blog => dispatch(addBlog(blog)),
  onBlogUpdate: blog => dispatch(updateBlog(blog)),
});

export default connect(mapStateToProps, dispatchToProps)(Blog);

