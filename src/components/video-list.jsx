import React from 'react';

import VideoListItem from './video-list-item';

const VideoList = (props) => {
  const videoItems = props.videos.map((video)=> {
    return (
      <VideoListItem 
        onVideoClick={props.onVideoSelect}
        key={video.etag}
        video={video} 
      />
    );
  });

  return (
    <ul className="col-sm-12 col-md-5 list-group">
      {videoItems}
    </ul>
  );
};

export default VideoList;