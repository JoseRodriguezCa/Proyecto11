import React from 'react';
import "./Pagination.css";
import PaginationsButtons from '../PaginationButtons/PaginationsButtons';

const Pagination = ({ page, totalPages, setPage, setFadeClass }) => {
  const handlePageChange = (newPage) => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setFadeClass("fade-out");

    setTimeout(() => {
      setPage(newPage);
      setFadeClass("");
    }, 500);
  };

  const handleNextPage = () => {
    if (page < totalPages) {
      handlePageChange(page + 1);
    }
  };

  const handlePrevPage = () => {
    if (page > 1) {
      handlePageChange(page - 1);
    }
  };

  return (
    <div className="pagination-controls">
      <PaginationsButtons onClick={handlePrevPage} disabled={page === 1}>
        <span>Prev</span>
        <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
      </PaginationsButtons>

      <span>{`Page ${page} of ${totalPages}`}</span>

      <PaginationsButtons onClick={handleNextPage} disabled={page === totalPages}>
        <span>Next</span>
        <svg width="15" height="15" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round"></path>
        </svg>
      </PaginationsButtons>
    </div>
  );
};

export default Pagination;
