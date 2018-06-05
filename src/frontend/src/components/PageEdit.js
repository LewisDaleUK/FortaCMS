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

  render() {
    const { loading, page } = this.state;
    const { history } = this.props;

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
            <input type="text" name="title" defaultValue={page.title} placeholder="Title" />
          </div>
          <div className="options">
            <div className="button" onClick={() => history.goBack()}>
              Submit
            </div>
            <div className="dropdown">
              <span className="oi" data-glyph="chevron-bottom" title="options"></span>
            </div>
          </div>
        </div>
        <EditorContainer value={page.content} />

        <HideableDiv title="Meta Content">
          <input type="text" name="metatitle" placeholder="Meta Title" defaultValue={meta.title} />
          <textarea name="metadesc" placeholder="Meta Description" defaultValue={meta.description}>
          </textarea>
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
