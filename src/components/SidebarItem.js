import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom'

export default class SidebarItem extends Component {
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

SidebarItem.propTypes = {
  /**
   * The icon to render as part of the item
   */
  icon: PropTypes.string.isRequired,

  /**
   * The title of the item. Displayed as a tooltip
   */
  title: PropTypes.string.isRequired,

  /**
   * The title of the item to render in the sidebar
   */
  children: PropTypes.node.isRequired,

  /**
   * The URL to link to
   */
  url: PropTypes.string.isRequired,

  /**
   * Bool indicating if the URL should be exact
   */
  exact: PropTypes.bool.isRequired,
};

SidebarItem.defaultProps = {
  exact: false,
};
