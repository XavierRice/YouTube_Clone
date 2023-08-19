import VideoCards from "./VideoCards.jsx"

const VideoMaker = ({allVideos, searchKey}) => {
const videoItems = allVideos?.items || [];

const VideoToRender = videoItems.map( video =>{

    return(
        <VideoCards video={video}/>
    )

})


return (
   <>
   <h1>{searchKey}</h1>
   {VideoToRender}
   </>
)





}

export default VideoMaker;