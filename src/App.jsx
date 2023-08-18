const test = console.log
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

const secret = import.meta.env.VITE_REACT_APP_API_KEY


function App() {
  
  const [ allVideos, setAllVideos] = useState([])
  
  useEffect(() => {
  
    fetch(`https://youtube.googleapis.com/youtube/v3/search?key=${secret}`)
        .then(r => r.json())
        .then(arr => setAllVideos(arr))
        .catch(err => console.log(err))
  },[])
  
  test(allVideos)

  return (
    
     <h1>Let's go Team!!</h1>
  )
}

export default App
