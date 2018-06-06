import React from 'react';
import '../css/Grid.css';

const Grid = ({ children }) => (
  <div className="grid">
    { children }
  </div>
);

const Row = ({ children }) => (
  <div className="row">
    { children }
  </div>
);

const Column = ({ onClick, children }) => (
  <div className="column" onClick={onClick}>
    { children }
  </div>
);

export { Grid, Column, Row };
