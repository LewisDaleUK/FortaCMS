import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class Editable extends Component {
  state = {
    editing: false,
  };

  inputElement = null;

  componentDidUpdate() {
    if(this.inputElement) {
      this.inputElement.focus();
    }
  }

  render() {
    const { name, className, onChange, id, value } = this.props;
    const { editing } = this.state;

    const startEditing = () => this.setState({ editing: true });
    const finishEditing = () => {
      this.setState({ editing: false });
      onChange(this.inputElement.value);
    }

    return editing ?
      (
        <input
          type="text"
          name={name}
          className={`editable editing ${className}`}
          defaultValue={value}
          onBlur={finishEditing}
          tabIndex="1"
          ref={t => this.inputElement = t}
          id={id}
        />
      ) :
      (
        <div className={`editable ${className}`} onFocus={startEditing} tabIndex="1">
          { value }
        </div>
      );
  }
}

Editable.propTypes = {
  /**
   * The name of the input element
   */
  name: PropTypes.string.isRequired,

  /**
   * The initial value of the element
   */
  value: PropTypes.string.isRequired,

  /**
   * An onChange callback to trigger
   */
  onChange: PropTypes.func.isRequired,

  /**
   * A custom id to pass to the element
   */
  id: PropTypes.string,
};

Editable.defaultProps = {
  id: 'editable-text'
};
