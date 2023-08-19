const test = console.log
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'

const secret = import.meta.env.VITE_REACT_APP_API_KEY
const search = "beyonce"

const options = {
   method: "GET",
   headers: {
       "Authorization": `Bearer ${secret}`,
   },
};


function App() {
                                                // our default could be Bey or just and empty string
  const [searchKey, setSearchKey] = useState("Tina-Turner")
  
  const [ allVideos, setAllVideos] = useState([])
  
  useEffect(() => {
  
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}&type=video&key=${secret} `)
        .then(r => r.json())
        .then(data => setAllVideos(data))
        .catch(err => console.log(err))
  },[searchKey])
  
  test(allVideos)
  
  







  return (
    
     <h1>Let's go Team!!</h1>
  )
}

export default App
