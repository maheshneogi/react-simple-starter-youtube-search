import React from 'react';
import VideoListItem from './video_item';

const VideoList = (props) => {
  const videoList = props.videos.map((video) => {
    return <VideoListItem
      onVideoSelect = {props.onVideoSelect}
      video={video}
      key={video.etag}/>
  });
  return (
    <ul className="col-md-4 list-group">
      {videoList}
    </ul>
  );
}

export default VideoList;
