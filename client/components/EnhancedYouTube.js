import React from 'react'
import YouTube from 'react-youtube'

const EnhancedYouTube = YouTubeComp => {
  return class Player extends React.Component {
    componentDidMount() {
      console.log(YouTubeComp)
    }
    render() {
      return <YouTubeComp {...this.props} />
    }
  }
}

export default EnhancedYouTube(YouTube)
