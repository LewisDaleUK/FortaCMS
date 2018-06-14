import React from 'react';
import PropTypes from 'prop-types';
import PageItem from './PageItem';
import Button from './Button';

const PageList = ({ pages, baseURL, keyPrefix }) => (
  <div className="pagelist">
    { pages.map(p => (
      <PageItem
        key={`${keyPrefix}-${p.id}`}
        title={p.title}
        date={p.date}
        author={p.author}
        path={p.path}
        editURL={`${baseURL}edit/${p.id}`}
      />
    ))
    }
    <Button to={`${baseURL}create`}>
      Add New
    </Button>
  </div>
);

PageList.propTypes = {
  /**
   * A list of pages to render
   */
  pages: PropTypes.array.isRequired,

  /**
   * The base URL of the parent route
   */
  baseURL: PropTypes.string.isRequired,

  /**
   * The key prefix to assign as part of the PageItem keys
   */
  keyPrefix: PropTypes.string.isRequired,
};

export default PageList;
