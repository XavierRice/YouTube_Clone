import VideoCards from "./VideoCards.jsx"

const VideoMaker = ({ allVideos, searchKey }) => {
    const videoItems = allVideos?.items || [];

    const VideoToRender = videoItems.map(video => {

        return (
            <div className="card-group">
                <VideoCards video={video} />
            </div>
        )

    })


    return (

        <div className="row row-cols-3">
            <h1>{searchKey}</h1>
            {VideoToRender}
        </div>
    )





}

export default VideoMaker;