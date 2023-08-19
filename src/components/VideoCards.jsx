import { useState } from "react";

const VideoCards = ({video}) => {

   const [showMore, setShowMore] = useState(false)
    

  return (
      <>
    <div className="card" style={{ width: '18rem' }} >
      <img variant="top" src={video.snippet.thumbnails.medium.url}/>
      <div className="card-body">
      <h5 className="card-title">{video.snippet.title}</h5>
      <p className="card-text">{video.snippet.description}</p>
      </div>
      <a herf="#" className="btn btn-primary" onClick={() => setShowMore(!showMore)}>Show More</a>
    </div>
    { showMore && (
         <div className="videoPlayer">
            <div className="player">
               <iframe className="youtube-player" 
               type="text/html"
               width="640"
               height="385"
               src={`https://www.youtube.com/embed/${video.id}`}>           
            </iframe>
            </div>
            <form>
             <h1>Form Goes Here</h1>
            </form>
         </div>
    )}
    </>
  
  )




}




export default VideoCards; 