import React, { Component } from 'react'
import './App.css'
import LineChart from './LineChart'
class App extends Component {
  randomArray = (total = 10) => {
    let data = []
    for (let element = 0; element < total; element++) {
      const y = Math.floor(Math.random() * 50) + 50
      const obj = {
        x: element,
        y
      }
      data.push(obj)
    }
    return data
  }
  render() {
    return (
      <div className="App">
        <div className="App">
          <div className="header">ReactDev SVG Chart</div>
          <LineChart data={this.randomArray()} />
        </div>
      </div>
    )
  }
}
export default App
