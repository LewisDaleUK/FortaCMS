import React, { Component } from 'react';
import Item from './Item';
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
          <Item icon="dashboard" title="dashboard" url="/" exact={true}>Dashboard</Item>
          <Item icon="document" title="pages" url="/page">Pages</Item>
          <Item icon="compass" title="navigation" url="/navigation">Navigation</Item>
          <Item icon="pencil" title="blog" url="/blog">Blog</Item>
          <Item icon="graph" title="stats" url="/stats">Stats</Item>
          <Item icon="wrench" title="settings" url="/settings">Settings</Item>

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
