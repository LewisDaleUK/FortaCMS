import React, { Component } from 'react';
import ReactMde, {ReactMdeTypes} from "react-mde";
import Showdown from "showdown";
import 'react-mde/lib/styles/css/react-mde-all.css';
import '../css/Editor.css';

Showdown.setOption('strikethrough', true);
Showdown.setOption('tasklists', true);

interface AppState {
  mdeState: ReactMdeTypes.MdeState;
}

export default class App extends Component<{}, AppState> {
  converter = Showdown.Converter;

  constructor(props) {
    super(props);

    this.state = {
      mdeState: {
        markdown: (props.value || "*Hello World*")
      },
    };

    this.converter = new Showdown.Converter({tables: true, simplifiedAutoLink: true});
  }

  handleValueChange = (mdeState: ReactMdeTypes.MdeState) => {
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
