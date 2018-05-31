import React, { Component } from 'react';
import PageItem from './PageItem';

export default class PageList extends Component {
  render() {
    const { pages, baseURL } = this.props;

    return (
      <div className="pagelist">
        { pages.map(p => (
          <PageItem
              key={`page-${p.id}`}
              title={p.title}
              date={p.date}
              author={p.author}
              path={p.path}
              editURL={`${baseURL}edit/${p.id}`}
            />
          ))
        }
      </div>
    );
  }
}
