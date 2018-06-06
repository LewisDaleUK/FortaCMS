import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Editable from './Editable';
import '../css/NavigationItem.css';

export default class NavigationItem extends Component {
  constructor(props) {
    super(props);

    this.onPathChange = this.onPathChange.bind(this);
    this.onTitleChange = this.onTitleChange.bind(this);
  }

  onPathChange(path) {
    const { id, title, onUpdate } = this.props;

    if(!path.length || path.charAt(0) !== '/') {
      path = '/' + path;
    }

    onUpdate({ id, path, title });
  }

  onTitleChange(title) {
    const { id, path, onUpdate } = this.props;
    onUpdate({ id, path, title });
  }

  render() {
    const { onDelete, id, title, path } = this.props;

    return (
      <div className="item">
        <Editable name="path" className="path" value={path} onChange={this.onPathChange} />
        <Editable name="title" className="title" value={title} onChange={this.onTitleChange}/>
        <span className="oi" data-glyph="trash" title="Delete" onClick={() => onDelete({ id, title, path })}></span>
      </div>
    );
  }
}

NavigationItem.propTypes = {
  /**
   * Function to call to update the navigation object
   */
  onUpdate: PropTypes.func.isRequired,

  /**
   * Function to call to delete the navigation object
   */
  onDelete: PropTypes.func.isRequired,

  /**
   * The ID of the navigation object
   */
  id: PropTypes.number.isRequired,

  /**
   * The title of the navigation item
   */
  title: PropTypes.string.isRequired,

  /**
   * The path of the navigation item
   */
  path: PropTypes.string.isRequired,
};
