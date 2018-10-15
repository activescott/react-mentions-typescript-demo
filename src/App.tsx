import * as React from 'react'
import { Examples } from './examples/Examples'

import './App.css'
import logo from './logo.svg'

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">react-mentions TypeScript demo</h1>
        </header>
        <p className="App-intro">
          This is a demonstration of using the <a href="https://github.com/signavio/react-mentions">react-mentions</a> component in a TypeScript application.
        </p>

        <Examples />
      </div>
    )
  }
}

export default App
