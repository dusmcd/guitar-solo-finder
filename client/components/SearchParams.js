import React from 'react'
import {connect} from 'react-redux'
import {getGuitaristsThunk, getSongsThunk, setViewAction} from '../store/solo'
import {Button, Form, Dropdown, Container, Segment} from 'semantic-ui-react'
import ModalWrapper from './ModalWrapper'
import './SearchParams.css'

class SearchParams extends React.Component {
  constructor() {
    super()
    this.state = {
      guitaristId: '',
      difficulty: '',
      style: '',
      speed: ''
    }
  }
  componentDidMount() {
    this.props.fetchGuitarists()
  }
  handleSubmit = event => {
    event.preventDefault()
    this.props.querySongs(this.state)
    this.props.setView(true)
    this.setState({
      guitaristId: '',
      difficulty: '',
      style: '',
      speed: ''
    })
  }
  handleChange = (event, dataObj) => {
    this.setState({
      [dataObj.options[0].name]: dataObj.value
    })
  }

  generateGuitaristOptions(guitarists) {
    return guitarists.map(guitarist => {
      return {
        key: guitarist.id,
        value: guitarist.id,
        flag: guitarist.id,
        text: guitarist.name,
        name: 'guitaristId'
      }
    })
  }
  generateDifficultyOptions() {
    return [
      {key: 'easy', value: 'easy', text: 'Easy', name: 'difficulty'},
      {key: 'intermediate', value: 'intermediate', text: 'Intermediate'},
      {key: 'hard', value: 'hard', text: 'Hard'}
    ]
  }
  generateSpeedOptions() {
    return [
      {key: 'slow', value: 'slow', text: 'Slow', name: 'speed'},
      {key: 'medium', value: 'medium', text: 'Medium'},
      {key: 'fast', value: 'fast', text: 'Fast'}
    ]
  }
  generateStyleOptions() {
    return [
      {key: 'bluesy', value: 'Bluesy', text: 'Bluesy', name: 'style'},
      {key: 'Heavy Metal', value: 'Heavy Metal', text: 'Heavy Metal'},
      {key: 'Jazz', value: 'Jazz', text: 'Jazz'},
      {key: 'Blues', value: 'Blues', text: 'Blues'},
      {key: 'Melodic', value: 'Melodic', text: 'Melodic'},
      {key: 'Bluegrass', value: 'Bluegrass', text: 'Bluegrass'}
    ]
  }
  render() {
    // a form to search for videos
    const {guitarists, isFetching, results} = this.props
    const guitaristOptions = this.generateGuitaristOptions(guitarists)
    const difficultyOptions = this.generateDifficultyOptions()
    const speedOptions = this.generateSpeedOptions()
    const styleOptions = this.generateStyleOptions()
    if (isFetching) return <Segment>LOADING...</Segment>
    return (
      <div>
        <Container>
          <ModalWrapper triggerButton="Search">
            <Form onSubmit={this.handleSubmit}>
              <h3>Guitarist</h3>
              <Dropdown
                placeholder="Choose a guitar player"
                fluid
                search
                selection
                labeled
                options={guitaristOptions}
                className="dropdown"
                onChange={this.handleChange}
              />

              <h3>Difficulty</h3>
              <Dropdown
                labeled
                placeholder="Choose a difficulty level"
                fluid
                selection
                options={difficultyOptions}
                className="dropdown"
                onChange={this.handleChange}
              />

              <h3>Speed</h3>
              <Dropdown
                labeled
                placeholder="Choose a speed"
                fluid
                selection
                options={speedOptions}
                className="dropdown"
                onChange={this.handleChange}
              />

              <h3>Style</h3>
              <Dropdown
                labeled
                placeholder="Choose a style"
                fluid
                selection
                options={styleOptions}
                className="dropdown"
                onChange={this.handleChange}
              />

              <Button basic color="orange">
                Find Solos
              </Button>
            </Form>
          </ModalWrapper>
        </Container>
      </div>
    )
  }
}

const mapState = state => {
  return {
    guitarists: state.solo.guitarists,
    isFetching: state.solo.isFetching
  }
}
const mapDispatch = dispatch => {
  return {
    fetchGuitarists: () => dispatch(getGuitaristsThunk()),
    querySongs: searchParams => {
      return dispatch(getSongsThunk(searchParams))
    },
    setView: view => dispatch(setViewAction(view))
  }
}

export default connect(mapState, mapDispatch)(SearchParams)
