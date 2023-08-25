import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import SearchBar from "./SearchBar.jsx";
import VideoMaker from "./VideoMaker.jsx";

const Home = ({ searchKey, setSearchKey, allVideos }) => {

   return (
      <>
         <Header />                                                      
         <SearchBar searchKey={searchKey} setSearchKey={setSearchKey} />    {/* I know a reworking of the fetch was recommened here. We passed information through props instead of one massive component */}
         <VideoMaker allVideos={allVideos} searchKey={searchKey}/>
         <Footer />
      </>
   )
};

export default Home;

  