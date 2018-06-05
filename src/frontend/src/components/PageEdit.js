import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EditorContainer from '../containers/EditorContainer';
import HideableDiv from './HideableDiv';
import pageList from '../constants/pages';
import '../css/Loader.css';
import '../css/Button.css';
import '../css/PageEdit.css';

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// TODO: Separate the logic into container
// TODO: Make submit button do things

export default class PageEdit extends Component {
  state = {
    loading: true,
    title: null,
    content: null,
    page: null
  };

  // Temporary load function
  async load(id) {
    id = parseInt(id, 10);
    new Promise(async resolve => {
      let result = pageList.find(page => page.id === id);;
      await sleep(500);
      resolve(result);
    }).then(result => {
      if(!result) {
        result = {
          id
        };
      }
      this.setState({
        loading: false,
        page: result
      });
    });
  }

  componentDidMount() {
    const { match, id } = this.props;
    const pageId = (match.params.id || id);
    this.load(pageId);
  }

  updateValue(key, value) {
    let page = this.state.page;
    page[key] = value;
    this.setState({ page });
  }

  updateMetaValue(key, value) {
    let page = this.state.page;
    page.meta[key] = value;
    this.setState({ page });
  }

  render() {
    const { loading, page } = this.state;
    const { onChange } = this.props;

    if(loading) {
      return (
        <div className="loader-wrapper">
          <div className="loader"></div>
        </div>
      );
    }

    const meta = ( page.meta || {} );
    return (
      <form className="pageform">
        <div className="heading">
          <div className="title">
            <input
              type="text"
              name="title"
              defaultValue={page.title}
              placeholder="Title"
              onChange={e => this.updateValue('title', e.target.value)} />
          </div>
          <div className="options">
            <div className="button" onClick={() => onChange(this.state.page)}>
              Submit
            </div>
            <div className="dropdown">
              <span className="oi" data-glyph="chevron-bottom" title="options"></span>
            </div>
          </div>
        </div>
        <EditorContainer value={page.content} onChange={v => this.updateValue('content', v)} />

        <HideableDiv title="Meta Content">
          <input
            type="text"
            name="metatitle"
            placeholder="Meta Title"
            defaultValue={meta.title}
            onChange={e => this.updateMetaValue('title', e.target.value)}
          />
          <textarea
            name="metadesc"
            placeholder="Meta Description"
            defaultValue={meta.description}
            onChange={e => this.updateMetaValue('description', e.target.value)}
          />
        </HideableDiv>

        <HideableDiv title="Social Media Settings">
          Post to:<br />
          <input type="checkbox" name="social_share[]" value="facebook" id="facebook"/>
          <label htmlFor="facebook">Facebook</label><br />

          <input type="checkbox" name="social_share[]" value="twitter" id="twitter" />
          <label htmlFor="twitter">Twitter</label><br />

          <input type="checkbox" name="social_share[]" value="linkedin" id="linkedin" />
          <label htmlFor="linkedin">LinkedIn</label><br />
        </HideableDiv>
      </form>
    );
  }
}

PageEdit.propTypes = {
  /**
   * The match object provided by react-router
   * Contains routing information
   */
  match: PropTypes.object,
};
