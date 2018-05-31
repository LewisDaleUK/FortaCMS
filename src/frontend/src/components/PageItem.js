import React from 'react';
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

export default PageItem;
