import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const PageItem = ({ title, date, author, path, editURL }) => (
  <div className="item">
    <NavLink exact to={editURL} activeClassName="active">
      <span className="title">{ title }</span>
      <span className="url">{ path }</span>
      <time>{ date }</time>
      <span className="author">{ author }</span>
      <span className="oi" data-glyph="chevron-right" title="Edit"></span>
    </NavLink>
  </div>
);

PageItem.propTypes = {
  /**
   * The title of the page
   */
  title: PropTypes.string.isRequired,

  /**
   * The date of the last page update
   */
  date: PropTypes.string.isRequired,

  /**
   * The name of the page author
   */
  author: PropTypes.string.isRequired,

  /**
   * The URL path that the page sits on
   */
  path: PropTypes.string.isRequired,

  /**
   * The URL of the edit page
   */
  editURL: PropTypes.string.isRequired,
};

export default PageItem;
