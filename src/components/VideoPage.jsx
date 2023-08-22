import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";


const VideoPage = ({video}) => {
  const {videoId} = useParams()

  console.log(videoId)

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
            <div className="player" >
                <iframe className="youtube-player"
                    type="text/html"
                    width="640"
                    height="385"
                    src={`https://www.youtube.com/embed/${`:videoId`}`}>
                </iframe>
            </div>
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
              style={{ width: '44rem' , height: '10rem' , backgroundColor: "slategrey"}}
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