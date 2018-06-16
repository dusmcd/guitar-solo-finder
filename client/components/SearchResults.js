import React from 'react'
import {connect} from 'react-redux'
import Video from './Video'
import {Container, Segment} from 'semantic-ui-react'

const SearchResults = props => {
  const {songs, isFetching} = props
  if (isFetching) return <Segment>LOADING VIDEOS...</Segment>
  if (!songs.length) {
    return (
      <Segment style={{backgroundColor: 'black'}}>
        <h3 style={{color: 'white', textAlign: 'center'}}>No Results Found</h3>
      </Segment>
    )
  }
  return (
    <Container>
      {songs.map(song => {
        return <Video key={song.id} song={song} />
      })}
    </Container>
  )
}

const mapState = state => {
  return {
    songs: state.solo.songs,
    isFetching: state.solo.isFetching
  }
}

export default connect(mapState)(SearchResults)
