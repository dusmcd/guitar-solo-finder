import React from 'react'
import YouTube from 'react-youtube'

const Video = props => {
  const {videoUrl} = props
  const videoId = videoUrl.substr(videoUrl.search('=') + 1)
  return <YouTube videoId={videoId} opts={{height: '390', width: '640'}} />
}

export default Video
