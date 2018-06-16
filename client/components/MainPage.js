import React from 'react'
import {connect} from 'react-redux'
import {Image, Container} from 'semantic-ui-react'
import SearchResults from './SearchResults'
import './MainPage.css'
import SearchParams from './SearchParams'

const MainPage = props => {
  const {results} = props
  return (
    <div>
      <div id="header">
        <h1>Looking for a great guitar solo?</h1>
        <SearchParams />
      </div>
      <ul className="slideshow">
        <li />
        <li />
        <li />
        <li />
        <li />
      </ul>
      <Container>{results && <SearchResults />}</Container>
    </div>
  )
}

const mapState = state => {
  return {
    results: state.solo.results
  }
}

export default connect(mapState)(MainPage)
