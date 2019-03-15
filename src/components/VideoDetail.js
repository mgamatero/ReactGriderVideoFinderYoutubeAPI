import React from 'react';

const VideoDetail = ({ video }) => {


    if (!video) {
        // const videoSrc = `https://www.youtube.com/embed/buildings`
        return (<div>Loading...</div>)
    }
   
        const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
        console.log(videoSrc)
        


        return (<div>
            <div className="ui embed">
                <iframe src={videoSrc} title="video player"/>
            </div>

            <div className="ui segment">
                <h4 className="ui header">
                    {video.snippet.title}
                </h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
        )
    
}

export default VideoDetail;