import React from 'react'
import "./SearchHistory.css";
export const SearchHistory = {(result)} => {
  return (
    <div 
    className="history-result" 
    onClick={(e) => alert(`You clicked on ${result.name}`)}
    >
    {result.name}
    </div>
  );
};
