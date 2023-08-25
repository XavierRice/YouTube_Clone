import VideoCards from "./VideoCards.jsx";

const VideoMaker = ({ allVideos, searchKey }) => {        //when our fetch wasn't responding the map would throw err so i added a ternary to set the video items to an arry if nothing is available.
    const videoItems = allVideos?.items || [];

    const VideoToRender = videoItems.map(video => {

        return (
            <div className="card-group p-1 " style={{width: '28rem', justifySelf: 'center'}}  >
                <VideoCards video={video} />
            </div>
        );
    });

    return (

        <div className=" row " style={{justifyContent:'center'}}>
            <h1>{searchKey}</h1>
            {VideoToRender}
        </div>
    );
};

export default VideoMaker;