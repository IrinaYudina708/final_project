import React from 'react';
import "../styles/Pagination.css";
import { EVENT } from "../constants/constants";

const Pagination = ({items, currentPage, itemsPerPage, handleClick}) => {
  // Logic for displaying page numbers
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(items.length / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="div_container">
      { pageNumbers.map((number) => (<li key={number} className={((currentPage==number) ? 'active' : 'notActive')} id={number} data-event={EVENT.PAGINATION} onClick={handleClick}>{number}</li>))}
    </div>
  );    
}

export default Pagination;