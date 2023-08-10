import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Son from './Son'
export default class App extends Component {
  render() {
    return (
      <>
        <div>index</div>
        <Son list={[1, 2, 3]}></Son>
      </>
    )
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
