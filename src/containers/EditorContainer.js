import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMde, {ReactMdeTypes} from "react-mde";
import Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import '../css/Editor.css';

Showdown.setOption('strikethrough', true);
Showdown.setOption('tasklists', true);

interface AppState {
  mdeState: ReactMdeTypes.MdeState;
}

export default class EditorContainer extends Component<{}, AppState> {
  converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
  state = {
    mdeState: {
      markdown: this.props.value,
    },
  };

  constructor(props) {
    super(props);

    this.handleValueChange = this.handleValueChange.bind(this);
  }

  handleValueChange(mdeState: ReactMdeTypes.MdeState) {
    this.setState({mdeState});
    this.props.onChange(mdeState.markdown);
  }

  render() {
    return (
      <div className="editor-container">
        <ReactMde
          onChange={this.handleValueChange}
          editorState={this.state.mdeState}
          generateMarkdownPreview={(markdown) => Promise.resolve(this.converter.makeHtml(markdown))}
          layout='horizontal'
        />
      </div>
    );
  }
}

EditorContainer.propTypes = {
  /**
   * The raw markdown to render in the container
   *
   * If not provided, will default to Hello World
   */
  value: PropTypes.string.isRequired,

  /**
   * Function to call when the value is changed
   */
  onChange: PropTypes.func.isRequired
};

EditorContainer.defaultProps = {
  value: "# Hello World",
};
