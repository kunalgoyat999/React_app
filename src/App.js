import React, {Component} from 'react'
import './App.css'
//eslint-disable-next-line
import Component1 from './functional/Component1'
//eslint-disable-next-line
import Container1 from './container/container1'
import Routes from './routes'

class App extends Component {
  render () {
    return (
      <div>
         React
         <Container1/>
      </div>
    )
  }
}

export default App;



/**
 * history.js
 */
