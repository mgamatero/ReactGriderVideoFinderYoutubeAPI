import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({videos,onVideoSelect}) => {

const renderedArray = videos.map((video) => {
    return <VideoItem onVideoSelect={onVideoSelect} video={video} key={video.id.videoId}/>
})    



    return(
        <div className="ui relaxed divided list">
        <div>{renderedArray}</div>
        </div>
    )
}

export default VideoList;