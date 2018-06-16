import React from 'react'
import YouTube from 'react-youtube'
import {Segment} from 'semantic-ui-react'
import './Video.css'

const Video = props => {
  const {song} = props
  const {videoUrl} = song
  const videoId = videoUrl.substr(videoUrl.search('=') + 1)
  return (
    <Segment className="video-card" style={{backgroundColor: 'black'}}>
      <YouTube videoId={videoId} opts={{height: '390', width: '600'}} />
      <div className="artist-info">
        <h3>{song.guitarist.name}</h3>
        <h3>"{song.name}"</h3>
        <h3>{song.guitarist.band.name}</h3>
        <h3>{song.guitarist.guitar}</h3>
      </div>
    </Segment>
  )
}

export default Video
