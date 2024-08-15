import React from 'react'
import "./PaginationButtons.css"

const PaginationsButtons = ({ onClick, disabled, children }) => {
  return (
    <button
      className='pagination-button'
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default PaginationsButtons;
