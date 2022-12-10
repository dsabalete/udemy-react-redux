import React from 'react'
import SeasonDisplay from './components/SeasonDisplay'
import Spinner from './components/Spinner'

import { createRoot } from 'react-dom/client'
const root = createRoot(document.querySelector('#root')) // createRoot(container!) if you use TypeScript

class App extends React.Component {
  state = { lat: null, errorMessage: null }

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    )
  }

  renderContent() {
    if (this.state.errorMessage && !this.state.lat) {
      return <div>Error: {this.state.errorMessage}</div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <SeasonDisplay lat={this.state.lat} />
    }

    return <Spinner message='Please accept location request' />
  }

  render() {
    return <div>{this.renderContent()}</div>
  }
}

root.render(<App />)
