import React, { Component } from 'react';
import SidebarItem from './SidebarItem';
import Logo from '../fortacode-symbol.png';
import '../css/Sidebar.css';

export default class Sidebar extends Component {
  render() {
    const { visible, onVisibleChange } = this.props;

    return (
      <div className={`sidebar ${!visible ? 'hidden':''}`}>
        <div className="inner">
          <div className="header">
            <img src={Logo} alt="FortaCode logo" />
            <h1>FortaCMS</h1>
          </div>
          <SidebarItem icon="dashboard" title="dashboard" url="/" exact={true}>Dashboard</SidebarItem>
          <SidebarItem icon="document" title="pages" url="/page">Pages</SidebarItem>
          <SidebarItem icon="compass" title="navigation" url="/navigation">Navigation</SidebarItem>
          <SidebarItem icon="pencil" title="blog" url="/blog">Blog</SidebarItem>
          <SidebarItem icon="graph" title="stats" url="/stats">Stats</SidebarItem>
          <SidebarItem icon="people" title="users" url="/users">Users</SidebarItem>
          <SidebarItem icon="wrench" title="settings" url="/settings">Settings</SidebarItem>

          <div className="hide" onClick={onVisibleChange}>
            { visible ?
              (<span className="oi" data-glyph="chevron-left" title="hide"></span>) :
              (<span className="oi" data-glyph="chevron-right" title="show"></span>)
            }
          </div>
        </div>
      </div>
    );
  }
}
