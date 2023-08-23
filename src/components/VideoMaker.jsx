import { FaSearch } from "react-icons/fa";
import VideoCards from "./VideoCards.jsx";
import VideoPage from "./VideoPage.jsx";



const VideoMaker = ({ allVideos, searchKey }) => {
    const videoItems = allVideos?.items || [];

    const VideoToRender = videoItems.map(video => {



        return (
            <div className="card-group p-2" style={{ width: '28rem' }}>
                <VideoCards video={video} />
            </div>

        );
    });


    return (

        <div className="col-sm-4">
            <h1>{searchKey}</h1>
            {VideoToRender}
        </div>
    );
};

export default VideoMaker;