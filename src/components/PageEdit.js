import React from 'react';
import EditorContainer from '../containers/EditorContainer';
import HideableDiv from './HideableDiv';
import '../css/Button.css';

const PageEdit = ({ page, onSubmit, onPageUpdate, onMetaUpdate }) => {
  const meta = (page.meta || {});

  return (
    <form className="pageform">
      <div className="heading">
        <div className="title">
          <input
            type="text"
            name="title"
            defaultValue={page.title}
            placeholder="Title"
            onChange={e => onPageUpdate('title', e.target.value)} />
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

export default PageEdit;
