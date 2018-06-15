import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'semantic-ui-react'

const MainPage = () => {
  return <Button>An Image Will probably go here</Button>
}

const mapState = state => {
  return {
    results: state.solo.results
  }
}

export default connect(mapState)(MainPage)
