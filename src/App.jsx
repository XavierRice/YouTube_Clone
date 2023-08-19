import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Searchbar from '../Components/Searchbar';
import './App.css'





function App() {

  return (

    <div className="App">
      <div className="searchbar-container">
        <Searchbar />
        <div className="">SearchResults</div>
      </div>
    </div>
  )
}

export default App
