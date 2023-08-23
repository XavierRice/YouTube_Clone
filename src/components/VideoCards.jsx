import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

const VideoCards = ({ video }) => {
  
// const videoId = video.id.videoId;
let {videoId} = useParams()

  return (

    <div className="card pb-4 pt-10 border border-primary border-5" style={{ width: '18rem' }}  >
      <Link to= {':videoId'}>
        <img variant="top" src={video.snippet.thumbnails.medium.url} alt="thunbnail of artist" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text truncate">{video.snippet.description}</p>
      </div>
    </div>


  )

}

{/* <button className="btn btn-primary" onClick={routeChanger}>View Video</button> */ }
{/* <Route path=`/video/${video.id.videoId}` element={ VideoPage video={video}} */ }


export default VideoCards; 