import React, { Component } from 'react'
import { render } from 'react-dom'
import Projects from './components/Projects'

class App extends Component {
  render () {
    return (
      <div>
        <Projects />
      </div>
    )
  }
}

render((
  <App />
), document.getElementById('root'))
