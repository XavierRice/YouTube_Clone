
import { useNavigate } from "react-router-dom";


const VideoCards = ({ video }) => {
 console.log(video.id.videoId)

  const navigate = useNavigate()

  const routeChanger = () => {
    let path = "newPath"
    let props = { video: video }
    navigate(path, props)
  }


  return (
    
      <div className="card pb-4 pt-10 border border-primary border-5" style={{ width: '18rem' }} >
        <img variant="top" src={video.snippet.thumbnails.medium.url} />
        <div className="card-body">
          <h5 className="card-title">{video.snippet.title}</h5>
          <p className="card-text truncate">{video.snippet.description}</p>
        </div>
        <button className="btn btn-primary" onClick={routeChanger}>View Video</button>
      </div>

  )




}




export default VideoCards; 