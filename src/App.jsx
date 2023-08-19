const test = console.log
const secret = import.meta.env.VITE_REACT_APP_API_KEY

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'



//COMPONENTS///
import VideoMaker from './Components/VideoMaker.jsx';
import SearchBar from './Components/SearchBar.jsx';
//import { SearchHistoryList } from './components/SearchHistoryList.jsx';



// const options = {
//    method: "GET",
//    headers: {
//        "Authorization": `Bearer ${secret}`,
//    },
// };


function App() {
                                                // our default could be Bey or just and empty string
  const [searchKey, setSearchKey] = useState("Beyonce")
  const [results, setResults] = useState([]);
  const [ allVideos, setAllVideos] = useState([])
  
  useEffect(() => {
  
    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}+song&type=video&maxResults=8&key=${secret} `)
        .then(r => r.json())
        .then(data => setAllVideos(data))
        .catch(err => console.log(err))
  },[searchKey, secret])
  
  test( "This is the Search:", searchKey, "And this is what we get:" , allVideos)
  
  


  return(
    <div className="App">
        <h1>Hi Team</h1>
    </div>
  )
};
export default App


//COMPONENTS//
/*



<div className="search-bar-container">
        <SearchBar setResults={setResults} />     // I'm moved this out of the app because it wasn't responding when i loaded it. Could you guide me through it? Looks like ur working with a userObj? can u create one if so?
        <SearchResultsList results={results}/>
      </div>

 <VideoMaker allVideos={allVideos} searchKey={searchKey}/>
<SearchBar searchKey={searchKey} setSearchKey={setSearchKey}/>




*/