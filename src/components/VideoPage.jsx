import { useState } from "react";
import { useLocation } from "react-router-dom";


const VideoPage = ({video}) => {
   
   const location = useLocation();

   const [comment, setComment] = useState("");
   const [name, setName] = useState("")
   
   function handleComment(){
       setComment()
    };
    
    function handleName(){
        setName()
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
                    src={`https://www.youtube.com/embed/${video.id}`}>
                </iframe>
            </div>
            <form>
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
            </form>
        </div>
    )
}


export default VideoPage;