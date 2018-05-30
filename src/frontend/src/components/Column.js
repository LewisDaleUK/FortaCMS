import React from 'react';

const Column = ({ onClick, children }) => (
  <div className="column" onClick={onClick}>
    { children }
  </div>
);

export default Column;
