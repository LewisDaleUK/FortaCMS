import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Button.css';

const Button = ({ className, onClick, to, children }) => (
  <div className={`button ${(className || '')}`} onClick={onClick}>
    {
      to ?
      (<Link to={to}>{ children }</Link>) :
      (<a>{ children }</a>)
    }
  </div>
);

export default Button;
