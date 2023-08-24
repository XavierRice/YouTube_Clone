const secret = import.meta.env.VITE_REACT_APP_API_KEY
const xsecret = import.meta.env.VITE_REACT_APP_X_API_KEY
const x2secret = import.meta.env.VITE_REACT_APP_X2_API_KEY

import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css'

//COMPONENTS///
import VideoMaker from './components/VideoMaker.jsx';
import SearchBar from './components/SearchBar.jsx';
import VideoPage from './components/VideoPage.jsx';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx'
import AboutPage from './components/AboutPage.jsx';
import Home from './components/Home.jsx'


function App() {

  const [searchKey, setSearchKey] = useState("")
  const [allVideos, setAllVideos] = useState([])


  useEffect(() => {

    fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchKey}+song&type=video&maxResults=8&key=${secret}`)
      .then(r => r.json())
      .then(data => setAllVideos(data))
      .catch(err => console.log(err))
  }, [searchKey, secret])


  return (
    <div className="App">
      <>
        <Routes>
          <Route path='/' element={<Home searchKey={searchKey} setSearchKey={setSearchKey} allVideos={allVideos} />} />
          <Route path='/aboutus' element={<AboutPage />} />
          <Route path=':videoId' element={<VideoPage />} />
        </Routes>
      </>
    </div>
  )
};

export default App;


//COMPONENTS//
/*
 
 
 
  < div className = "search-bar-container" >

        <SearchBar setResults={setResults} />     // I'm moved this out of the app because it wasn't responding when i loaded it and there was no seachBar made so i made one, We're you thinking "searchHistory?". Could you guide me through it? Looks like ur working with a userObj? can u create one if so?
        <SearchResultsList results={results}/>
</div >
 
<SearchBar searchKey={searchKey} setSearchKey={setSearchKey}/>
<VideoMaker allVideos={allVideos} searchKey={searchKey}/>
<Footer/>
<NabBar/>
 
 <Route path=':videoId' element={<VideoPage/>}/>

       <Routes>
        <Route path='/' element={<h1>Home</h1>} />   this should lead to: header, searchbar, videmaker and footer
        <Route path='/about' element={ <AboutPage/>} />  <AboutPage/> 
        <Route path='/search' element={<h1>Search</h1>} />  this should: header, searchBar and footer  
        <Route path=`/video/${video.id.videoId}` element={ VideoPage video={video}}
      </Routes>



      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={ <AboutPage/>} />
        <Route path=':videoId' element={<VideoPage />} />
      </Routes>
*/
