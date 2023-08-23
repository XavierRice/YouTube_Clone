import React from "react";
import { useState } from "react";
import { GoThumbsdown, GoThumbsup } from "react-icons";



function LikeNDislikes() {

    const [like, setLike] = useState(0)
    const [dislike, setDislike] = useState(0)

    return (
        <>
            <div className="like-style" key="like-button">
                <button onClick={() => setLike((like) => like + 1)} > <GoThumbsup id="thumbs-up" /> </button >
            </div >
            <div className="dislike-style" key="dislike-button">
                <button oncClick={() => setDislike((dislike) => dislike + 1)} > <GoThumbsdown id="thumbs-down" /> </button>

            </div>
        </>


    )
}


export default LikeNDislikes;