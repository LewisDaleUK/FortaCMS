import React from 'react';
import { NavLink } from 'react-router-dom'

const Item = ({icon, title, children, url}) => (
  <div className="item">
    <NavLink to={url} activeClassName="active">
      <span className="oi" data-glyph={icon} title={title} aria-hidden="true"></span>
      <span className="title">{children}</span>
    </NavLink>
  </div>
);

export default Item;
