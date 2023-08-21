import React from 'react'
import "./SearchHistoryList.css";
import { SearchHistory } from './SearchHistory';

export const SearchHistoryList = ({results}) => {
  return (
    <div className="history-list">
        {results.map((result, id) => {
          return <SearchHistory result={result} key={id} />;
        })}
    </div>
  );
};

