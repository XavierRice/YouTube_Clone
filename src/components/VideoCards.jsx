import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const VideoCards = ({ video }) => {
 console.log(video.id.videoId)

  const navigate = useNavigate()

  const routeChanger = () => {
    let path = `/video/${video.id.videoId}`
    let props = { video: video }
    navigate(path, props)
  }


  return (
    
      <div className="card pb-4 pt-10 border border-primary border-5" style={{ width: '18rem' }} >
        <Link to={ `/video/${video.id.videoId}`}>
        <img variant="top" src={video.snippet.thumbnails.medium.url} alt="thunbnail of artist"/>
        </Link>
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
          <p className="card-text truncate">{video.snippet.description}</p>
        </div>
        <button className="btn btn-primary" onClick={routeChanger}>View Video</button>
      </div>

  )

}

{/* <button className="btn btn-primary" onClick={routeChanger}>View Video</button> */}



export default VideoCards; 