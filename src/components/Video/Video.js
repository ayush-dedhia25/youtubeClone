import React from 'react';
import './Video.css';

const Video = ({ videoId, time, title, description, thumbnail, channel }) => {
  return (
    <div className="video">
      <img
        src={thumbnail}
        alt={videoId}
        className="video_thumbnail"
      />
      
      <div className="video_videoInfo">
        <h3 className="video_owner">
          <span className="badge">Channel name</span>
          {channel}
        </h3>
        
        <span className="divider"></span>
        
        <p className="video_title">
          <span className="badge">Title</span>
          {title}
        </p>
        
        <span className="divider"></span>
        
        <p className="video_description">
          <span className="badge">Description</span>
          {description.length === 0 ? "No description..." : description}
        </p>
        
        <span className="divider"></span>
        
        <p className="video_date">
          <span className="badge">published at</span>
          {time.slice(0, 10)}
        </p>
      </div>
    </div>
  );
};

export default Video;