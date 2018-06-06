import React from 'react';
import PropTypes from 'prop-types';
import EditorContainer from '../containers/EditorContainer';
import HideableDiv from './HideableDiv';
import '../css/Button.css';

const PageEdit = ({ page, onSubmit, onPageUpdate, onMetaUpdate, getPath }) => {
  const meta = (page.meta || {});

  return (
    <form className="pageform">
      <div className="heading">
        <div className="title">
          <input
            type="text"
            name="title"
            value={page.title}
            placeholder="Title"
            onChange={e => onPageUpdate('title', e.target.value)} />
        </div>
        <div className="url">
          <input
            type="text"
            name="path"
            value={page.path}
            placeholder="Title"
            onChange={e => onPageUpdate('path', e.target.value)} />
        </div>
        <div className="options">
          <div className="button" onClick={onSubmit}>
            Submit
          </div>
          <div className="dropdown">
            <span className="oi" data-glyph="chevron-bottom" title="options"></span>
          </div>
        </div>
      </div>
      <EditorContainer value={page.content} onChange={v => onPageUpdate('content', v)} />

      <HideableDiv title="Meta Content">
        <input
          type="text"
          name="metatitle"
          placeholder="Meta Title"
          defaultValue={meta.title}
          onChange={e => onMetaUpdate('title', e.target.value)}
        />
        <textarea
          name="metadesc"
          placeholder="Meta Description"
          defaultValue={meta.description}
          onChange={e => onMetaUpdate('description', e.target.value)}
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
};

PageEdit.propTypes = {
  /**
   * The page item to edit
   */
  page: PropTypes.shape({
    id: PropTypes.number.isRequired,
  }).isRequired,

  /**
   * The function to call when the submit button is pressed
   */
  onSubmit: PropTypes.func.isRequired,

  /**
   * The function to call to update a value of Page
   */
  onPageUpdate: PropTypes.func.isRequired,

  /**
   * The function to call to update a value of Page.meta
   */
  onMetaUpdate: PropTypes.func.isRequired,
};

export default PageEdit;
