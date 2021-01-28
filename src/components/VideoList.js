import React from 'react';
import VideoItem from './VideoItem'

const VideoList = ({videos, onVideoSelect}) => {
  const video = videos.map(video => {
    return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
  })

  return (
    <div className='ui list'>
      {video}
    </div>
  )
}

export default VideoList;