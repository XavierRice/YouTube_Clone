const test = console.log
const secret = import.meta.env.VITE_REACT_APP_API_KEY
import React from "react"
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import './App.css'



//COMPONENTS///
import VideoMaker from './Components/VideoMaker.jsx';
import SearchBar from './Components/SearchBar.jsx';
import VideoPage from './Components/VideoPage.jsx';
import Footer from './Components/Footer.jsx';
import Header from './Components/Header.jsx'
import AboutPage from './Components/AboutPage.jsx';
<<<<<<< HEAD
//import  SearchHistoryList  from './Components/SearchHistoryList.jsx';
=======
<<<<<<< HEAD
import Home from './Components/Home.jsx'
=======
//import  SearchHistoryList  from './Components/SearchHistoryList.jsx';
>>>>>>> GasparecYT
>>>>>>> main



// const options = {
//    method: "GET",
//    headers: {
//        "Authorization": `Bearer ${secret}`,
//    },
// };


function App() {

  const [searchKey, setSearchKey] = useState("") // our default could be Bey or just and empty string
  const [results, setResults] = useState([]);    // whats this array for?
  const [allVideos, setAllVideos] = useState([])  //set as a prop to the SearchBar component

  useEffect(() => {


    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}+song&type=video&maxResults=8&key=${secret} `)
      .then(r => r.json())
      .then(data => setAllVideos(data))
      .catch(err => console.log(err))
  }, [searchKey, secret])

  test("This is the Search:", searchKey, "And this is what we get:", allVideos)


  return (
    <div className="App">
<<<<<<< HEAD
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <VideoMaker allVideos={allVideos} searchKey={searchKey} />

=======
<<<<<<< HEAD
      <Routes>
        <Route path='/' element={<Home searchKey={searchKey} setSearchKey={setSearchKey} allVideos={allVideos} />} />
        <Route path='/about' element={<AboutPage />} />
      </Routes>
=======
      <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />
      <VideoMaker allVideos={allVideos} searchKey={searchKey} />

>>>>>>> GasparecYT
>>>>>>> main
    </div>
  )
};


export default App;


//COMPONENTS//

 
 
 
  < div className = "search-bar-container" >

        <SearchBar setResults={setResults} />     // I'm moved this out of the app because it wasn't responding when i loaded it and there was no seachBar made so i made one, We're you thinking "searchHistory?". Could you guide me through it? Looks like ur working with a userObj? can u create one if so?
        <SearchResultsList results={results}/>
</div >
 
<SearchBar searchKey={searchKey} setSearchKey={setSearchKey}/>
<VideoMaker allVideos={allVideos} searchKey={searchKey}/>
<Footer/>
<NabBar/>
 
 
       <Routes>
        <Route path='/' element={<h1>Home</h1>} />   this should lead to: header, searchbar, videmaker and footer
        <Route path='/about' element={ <AboutPage/>} />  <AboutPage/> 
        <Route path='/search' element={<h1>Search</h1>} />  this should: header, searchBar and footer  
        <Route path=`/video/${video.id.videoId}` element={ VideoPage video={video}}
      </Routes>
