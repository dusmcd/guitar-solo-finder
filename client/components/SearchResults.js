import React from 'react'
import Video from './Video'
import axios from 'axios'
import {Container, Segment} from 'semantic-ui-react'

class SearchResults extends React.Component {
  constructor() {
    super()
    this.state = {
      songs: [],
      isFetching: true
    }
  }
  componentDidMount() {
    // fetch search results from db query
    axios.get('/api/songs').then(res => {
      this.setState({songs: res.data, isFetching: false})
    })
  }
  render() {
    const {songs, isFetching} = this.state
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

export default SearchResults
