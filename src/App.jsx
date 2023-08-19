import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'
import { SearchHistoryList } from './components/SearchHistoryList';


function App() {
  const [results, setResults] = useState([]);

  return(
    <div className="App">
      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        <SearchResultsList results={results}/>
      </div>
    </div>
  )
}
export default App
