import React from 'react'
import "./SearchHistory.css";



 const SearchHistory = ({result}) => {
  return (
    <div 
    className="history-result" 
    onClick={(e) => alert(`You clicked on ${result.name}`)}
    >   
    {result.name}
    </div>
  );
};

export default SearchHistory;