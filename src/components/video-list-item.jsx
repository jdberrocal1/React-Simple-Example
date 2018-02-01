import React from 'react';


const VideoListItem = ({ video, onVideoClick }) => {
  const imageURL = video.snippet.thumbnails.default.url;
  const title = video.snippet.title;

  return (
    <li className="list-group-item" onClick={() => onVideoClick(video)}>
      <div className="video-list media">
        <div className="media-left">
          <img src={imageURL} className="media-object" />
        </div>
        <div className="media-body">
          <div className="media-heading">
            {title}
          </div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;