import React from 'react'
import {connect} from 'react-redux'
import {Image, Container} from 'semantic-ui-react'
import SearchResults from './SearchResults'
import './MainPage.css'

class MainPage extends React.Component {
  constructor() {
    super()
    this.state = {
      imageNumber: 1
    }
  }
  render() {
    const {results} = this.props
    const image1 = 'guitar-banner.jpeg'
    const image2 = 'guitar-banner2.jpg'
    return (
      <div>
        <div id="banner">
          <Image className="banner-img" src="/guitar-banner.jpeg" />
        </div>
        <Container>{results && <SearchResults />}</Container>
      </div>
    )
  }
}

const mapState = state => {
  return {
    results: state.solo.results
  }
}

export default connect(mapState)(MainPage)
