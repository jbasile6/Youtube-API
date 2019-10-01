import React from 'react';
import VideoData from '../Video/Video';


const VideoList = props => {
    console.log(props.videoData)

    return(
    <div>
        <ul>
        {props.videoData.map(eachVideo => {
            return <VideoData key={eachVideo.id.videoId} video={eachVideo}/>
        })}
        </ul>
    </div>
    )
}

export default VideoList;