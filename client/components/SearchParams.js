import React from 'react'
import {Button, Form, Dropdown, Container} from 'semantic-ui-react'
import axios from 'axios'
import './SearchParams.css'

class SearchParams extends React.Component {
  constructor() {
    super()
    this.state = {
      guitarists: []
    }
  }
  componentDidMount() {
    axios
      .get('/api/guitarists')
      .then(res => this.setState({guitarists: res.data}))
  }
  handleSubmit = event => {
    event.preventDefault()
  }
  render() {
    // a form to search for videos
    const {guitarists} = this.state
    const guitaristOptions = guitarists.map(guitarist => {
      return {
        key: guitarist.id,
        value: guitarist.id,
        flag: guitarist.id,
        text: guitarist.name
      }
    })
    const difficultyOptions = [
      {key: 'easy', value: 'easy', text: 'Easy'},
      {key: 'intermediate', value: 'intermediate', text: 'Intermediate'},
      {key: 'hard', value: 'hard', text: 'Hard'}
    ]
    const speedOptions = [
      {key: 'slow', value: 'slow', text: 'Slow'},
      {key: 'medium', value: 'medium', text: 'Medium'},
      {key: 'fast', value: 'fast', text: 'Fast'}
    ]
    const styleOptions = [
      {key: 'bluesy', value: 'Bluesy', text: 'Bluesy'},
      {key: 'Heavy Metal', value: 'Heavy Metal', text: 'Heavy Metal'},
      {key: 'Jazz', value: 'Jazz', text: 'Jazz'},
      {key: 'Blues', value: 'Blues', text: 'Blues'},
      {key: 'Melodic', value: 'Melodic', text: 'Melodic'},
      {key: 'Bluegrass', value: 'Bluegrass', text: 'Bluegrass'}
    ]
    return (
      <Container>
        <Form>
          <label className="label-dropdown">Guitar Player</label>
          <Dropdown
            placeholder="Choose a guitar player"
            fluid
            search
            selection
            labeled
            options={guitaristOptions}
            className="dropdown"
          />

          <label className="label-dropdown">Difficulty</label>
          <Dropdown
            labeled
            placeholder="Choose a difficulty level"
            fluid
            selection
            options={difficultyOptions}
            className="dropdown"
          />

          <label className="label-dropdown">Speed</label>
          <Dropdown
            labeled
            placeholder="Choose a speed"
            fluid
            selection
            options={speedOptions}
            className="dropdown"
          />

          <label className="label-dropdown">Style</label>
          <Dropdown
            labeled
            placeholder="Choose a style"
            fluid
            selection
            options={styleOptions}
            className="dropdown"
          />
          <Button inverted color="blue">
            Find Solos
          </Button>
        </Form>
      </Container>
    )
  }
}

export default SearchParams