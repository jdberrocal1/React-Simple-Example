import React from 'react';


const VideoDetail = ({ video }) => {
  if (!video){
    return <div>Loading...</div>
  }

  const videoURL = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div className="video-detail col-sm-12 col-md-7">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe src={videoURL} className="embed-embed-responsive-item"></iframe>
      </div>
      <div className="details">
        <div className="">{video.snippet.title}</div>
        <div className="">{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;