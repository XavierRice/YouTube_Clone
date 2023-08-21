import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

{/* <Route path=`/video/${video.id.videoId}` element={VideoPage video={video}} />  */}

const VideoPage = ({video}) => {
   


   const [comment, setComment] = useState("");
   const [name, setName] = useState("")
   
   function handleComment(e){
       setComment(e.target.value)
    };
    
    function handleName(e){
        setName(e.target.value)
    };
    
    function handleSubmit(e){
        e.preventDefault();
        setComment(" ");
        setName(" ")
    };


    return (

        <div className="videoPlayer">
            <div className="player">
                <iframe className="youtube-player"
                    type="text/html"
                    width="640"
                    height="385"
                    src={`https://www.youtube.com/embed/${video.id.videoId}`}>
                </iframe>
            </div>
            <div className="fs-3">{video.snippet.title}</div>
            <form onSubmit={handleSubmit}>
            <label htmlFor="name">
            Name
            <input
              style={{ width: '44rem' }}
              id={name}
              name="name"
              type="text"
              value = {name}
              onChange={handleName}
              placeholder="Your name..."
            />
          </label>
          <label htmlFor="comment">
            Comment
            <input
              id={comment}
              style={{ width: '44rem' , height: '90rem' }}
              name="comment"
              type="text"
              value={comment}
              onChange={handleComment}
              placeholder="Add a brief message..."
            />
          </label>
          <button type="submit" className="btn btn-secondary">Submit</button>
            </form>
        </div>
    )
};


export default VideoPage;