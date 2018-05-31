import React, { Component } from 'react';
import EditorContainer from '../containers/EditorContainer';
import pageList from '../constants/pages';
import '../css/Loader.css';
import '../css/PageEdit.css';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default class PageEdit extends Component {
  state = {
    loading: true,
    title: null,
    content: null,
  };

  // Temporary load function
  async load(id) {
    id = parseInt(id, 10);
    new Promise(async resolve => {
      let result = pageList.find(page => page.id === id);;
      await sleep(500);
      resolve(result);
    }).then(result => {
      this.setState({
        loading: false,
        title: result.title,
        content: result.content
      });
    });
  }

  componentDidMount() {
    const { match } = this.props;
    const id = match.params.id;
    this.load(id);
  }

  render() {
    if(this.state.loading) {
      return (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      );
    }

    return (
      <form className="pageform">
        <div className="title">
          <input type="text" name="title" defaultValue={this.state.title} placeholder="Title" />
        </div>
        <EditorContainer />
      </form>
    );
  }
}
