import React from 'react';

const EmbeddedVideo = ({ videoData }) => {
    if (!videoData) {
        console.log('Does not exist', videoData)
        return <div className="loader"></div>

    } else {
        console.log('does exist', videoData)
        const videoId = videoData.id.videoId;
        const url = `https://www.youtube.com/embed/${videoId}`;

        return (
            <div className='embed-vid'>
                <div className='embed-responsive'>
                    <iframe className='embed-item' src={url}></iframe>
                </div>
                <div className='vid-details'>
                    <div>{videoData.snippet.title}</div>
                    <div>{videoData.snippet.description}</div>
                </div>
            </div>
        )
    }
}


export default EmbeddedVideo;