import React from "react";
import "./index.css";

const PaginationComponent = ({ icon, bg, color, handlepage }) => {
  return (
    <div className='page-btn-box'>
      <button
        className='page-btn py-3 px-4 mr-2 text-2xl'
        style={{ backgroundColor: bg, color: color }}
        onClick={handlepage}
      >
        {icon}
      </button>

      <div className='button-box'></div>
    </div>
  );
};

export default PaginationComponent;
