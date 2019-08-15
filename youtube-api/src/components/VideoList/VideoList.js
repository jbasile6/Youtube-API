import React from 'react';
import Video from '../Video/Video';


const VideoList = props => {
    console.log(props.videoData)

    return(
    <div>
        <ul>
        {props.videoData.map(eachVideo => {
            return <Video key={eachVideo.id.videoId} video={eachVideo}/>
        })}
        </ul>
    </div>
    )
}

export default VideoList;