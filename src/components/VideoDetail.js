import React from 'react';

const VideoDetail = ({video}) => {

    if(!video){
        return <h1>Loading youTube API</h1>
    }

    const videoID = `https://www.youtube.com/embed/${video.id.videoId}`;

    return(
        <div>
            <div className="ui embed">
                <iframe src={videoID} title="video player"/>
            </div>
            <div className="ui segment">
                <h4>{video.snippet.title}</h4>
                <h5>{video.snippet.channelTitle}</h5>
                <p>{video.snippet.description}</p>
            </div>
         </div>
    )
}

export default VideoDetail;