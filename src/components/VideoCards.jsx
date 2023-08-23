import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import VideoPage from "./VideoPage.jsx";


const VideoCards = ({ video }) => {
  console.log(video.id.videoId)

  return (

    <div className="col-6 col-md-4" style={{ width: '18rem' }} >
      <Link to={`/video/${video.id.videoId}`} >
        <img variant="top" src={video.snippet.thumbnails.medium.url} alt="thunbnail of artist" />
      </Link>
      <div className="card-body">
        <h5 className="card-title">{video.snippet.title}</h5>
        <p className="card-text truncate">{video.snippet.description}</p>
      </div>

      <Routes>
        <Route path={`/video/${video.id.videoId}`} element={<VideoPage video={video} />} />
      </Routes>
    </div>


  )

}

{/* <button className="btn btn-primary" onClick={routeChanger}>View Video</button> */ }
{/* <Route path=`/video/${video.id.videoId}` element={ VideoPage video={video}} */ }


export default VideoCards; 