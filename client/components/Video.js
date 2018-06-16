import React from 'react'
import YouTube from 'react-youtube'
import {Segment} from 'semantic-ui-react'
import './Video.css'

const Video = props => {
  const {videoUrl} = props
  const videoId = videoUrl.substr(videoUrl.search('=') + 1)
  return (
    <Segment className="artist-info">
      <YouTube videoId={videoId} opts={{height: '390', width: '600'}} />
      <div>
        <h3>Guitarist Name</h3>
        <h3>Band</h3>
        <h3>Guitar</h3>
      </div>
    </Segment>
  )
}

export default Video
