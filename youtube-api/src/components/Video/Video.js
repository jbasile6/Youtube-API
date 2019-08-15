import React from 'react';

const Video = props => {
    
    return (
        <li className='eachVideo'>
            <div className='video-thumbnail'>
            <img alt={`${props.video.title} thumbnail`} src={props.video.snippet.thumbnails.default.url} />
            </div>
            <div className='video-info'>
                <h4>{props.video.snippet.title}</h4>
                <p>{props.video.snippet.description}</p>
            </div>
        </li>
    )
}


export default Video;