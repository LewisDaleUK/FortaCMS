import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

export default class Item extends Component {
  state = {
    active: false,
  };

  render() {
    const { icon, title, children, url, exact } = this.props;
    const onClick = () => this.setState({ active: !this.state.active });

    return (
      <div className="item">
        <NavLink exact={exact} to={url} activeClassName="active" onClick={onClick}>
          <span className="oi" data-glyph={icon} title={title} aria-hidden="true"></span>
          <span className="title">{children}</span>
        </NavLink>
      </div>
    );
  }
}
