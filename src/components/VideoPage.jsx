import { useState } from "react";
import { useParams } from "react-router-dom";
import { GoThumbsdown, GoThumbsup } from "react-icons/go";
import Footer from "./Footer";


const VideoPage = (  ) => {

  function LikeNDislikes() {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    return (
        <>
            <div className="like-style" key="like-button">
                <button onClick={() => setLike((like) => like + 1)} > <GoThumbsup id="thumbs-up" /> </button >
            </div >
            <div className="dislike-style" key="dislike-button">
                <button onClick={() => setDislike((dislike) => dislike + 1)} > <GoThumbsdown id="thumbs-down" /> </button>
            </div>
             <div> <h4>Likes:{like}Disikes:{dislike}</h4> </div>
        </>
    )
};

let { videoId }  = useParams();


  const [comment, setComment] = useState("");
  const [name, setName] = useState("")
  const [note, setNote] = useState([])


  function handleComment(e) {

    setComment(e.target.value)
  };

  function handleName(e) {

    setName(e.target.value)
  };

  function handleSubmit(e) {
    e.preventDefault();

    if(name === "" ||comment === ""){
      alert("You must enter a name & comment")
      setComment(" ");
      setName(" ");
      return null;
    } else {
    
    const newNote = {
      commentor: name,
      comment: comment
    }

    
    setNote([...note, newNote])
    setComment(" ");
    setName(" ")

  }};

  const renderComments = note.map( (note, i) => {
    return (
        <h6 key={i}>
         <strong>{note.commentor}:{"   "}</strong><em>{note.comment}</em>
        </h6>
    )
  }) 

  return (
      <>
    <div className="video-responsive"  key={videoId}>
      <div className="player" >
        <iframe className="youtube-player"
          type="video/mp4"
          width="853"
          height="480"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture "
          allowFullScreen
          title="Embedded youtube"
          src={`https://www.youtube.com/embed/${videoId}`}
          />
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">
          Name
          <input
            style={{ width: '29rem' }}
            id= "name"
            name="name"
            type="text"
            value={name}
            onChange={handleName}
            placeholder="Your name..."
          />
        </label>
        <label htmlFor="comment">
          Comment
          <input
            id="comment"
            style={{ width: '44rem', height: '9rem', backgroundColor: "white", marginTop: "10px" }}
            name="comment"
            type="text"
            value={comment}
            onChange={handleComment}
            placeholder="Add a brief message..."
          />
        </label>
        <button type="submit" className="btn btn-secondary">Submit</button>
      </form>
      <div className="box return" style={{ justifyContent:"left" }}>
        {renderComments}
      </div>
      <LikeNDislikes/>
    </div>
    <Footer/>
    </>
  )
};


export default VideoPage;