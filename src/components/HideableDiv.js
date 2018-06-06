import React, { Component } from 'react';
import '../css/HideableDiv.css';

export default class HideableDiv extends Component {
  state = {
    visible: false
  };

  render() {
    const { children, title } = this.props;
    const { visible } = this.state;

    return (
      <div className={`hideable ${visible ? '' : 'hidden'}`}>
        <div className="heading" onClick={() => this.setState({ visible: !visible })}>
          { title }
          { this.state.visible ?
              ( <span className="oi" data-glyph="chevron-top" title="Show"></span> ) :
              ( <span className="oi" data-glyph="chevron-bottom" title="Hide"></span> )
          }
        </div>
        <div className="content">
          { children }
        </div>
      </div>
    );
  }
}
