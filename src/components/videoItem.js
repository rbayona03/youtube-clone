import React from 'react';
import './VideoItem.css';

const videoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className=" videoItem item">
            <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
           <div className="content">
               <div className="videoHeader header">{video.snippet.title}</div>
           </div>
        </div>
    )
}

export default videoItem;