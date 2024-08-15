import "./button.css";
import React from 'react';
import { Link } from 'react-router-dom';

const Button = ({ className, onClick, children, to }) => {
  return to ? (
    <Link to={to} className={className}>
      {children}
    </Link>
  ) : (
    <button className={className} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
