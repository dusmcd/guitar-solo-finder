import React from 'react'
import {connect} from 'react-redux'
import Video from './Video'
import {Container, Segment} from 'semantic-ui-react'

class SearchResults extends React.Component {
  componentDidMount() {
    // fetch search results from db query
  }
  render() {
    const {songs, isFetching} = this.props
    if (isFetching) return <Segment>LOADING VIDEOS...</Segment>
    return (
      <Container>
        {songs.map(song => {
          return (
            <Segment key={song.id}>
              <Video videoUrl={song.videoUrl} />
            </Segment>
          )
        })}
      </Container>
    )
  }
}

const mapState = state => {
  return {
    songs: state.solo.songs,
    isFetching: state.solo.isFetching
  }
}

export default connect(mapState)(SearchResults)
