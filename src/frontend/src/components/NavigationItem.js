import React, { Component } from 'react';
import Editable from './Editable';
import '../css/NavigationItem.css';

export default class NavigationItem extends Component {
  state = {
    'title': this.props.title,
    'path': this.props.path
  };

  constructor(props) {
    super(props);

    this.onPathChange = this.onPathChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onPathChange(v) {
    if(!v.length || v.charAt(0) !== '/') {
      v = '/' + v;
    }

    this.setState({ path: v });
  }

  onTitleChange(v) {
    this.setState({ title: v });
  }

  render() {
    const { title, path } = this.state;
    const { onDelete, id } = this.props;

    return (
      <div className="item">
        <Editable name="path" className="path" value={path} onChange={this.onPathChange} />
        <Editable name="title" className="title" value={title} onChange={this.onTitleChange}/>
        <span className="oi" data-glyph="trash" title="Delete" onClick={() => onDelete(id)}></span>
      </div>
    );
  }
}
