import React from 'react';
import { NavLink } from 'react-router-dom';
import PageItem from './PageItem';

const PageList = ({ pages, baseURL }) => (
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
    <div className="button">
      <NavLink to={`${baseURL}create`}>
        Add New
      </NavLink>
    </div>
  </div>
);

export default PageList;
