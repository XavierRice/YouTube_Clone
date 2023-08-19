import { useState } from "react";
import { useNavigate as navigate } from "react-router-dom";


const VideoCards = ({video}) => {

  const routeChanger = () => {
     let path = "newPath"
     navigate(path)
  }


   const [showMore, setShowMore] = useState(false)
    

  return (
      <>
    <div className="card" style={{ width: '18rem' }} >
      <img variant="top" src={video.snippet.thumbnails.medium.url}/>
      <div className="card-body">
      <h5 className="card-title">{video.snippet.title}</h5>
      <p className="card-text">{video.snippet.description}</p>
      </div>
      <button className="btn btn-primary" onClick={routeChanger}>View Video</button>
    </div>

    </>
  
  )




}




export default VideoCards; 