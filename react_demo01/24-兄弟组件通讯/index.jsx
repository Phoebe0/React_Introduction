import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Son1 from './Son1'
import Son2 from './Son2'
export default class App extends Component {
  state = {
    num: '123',
  }
  editNum = (n) => {
    this.setState({
      num: +this.state.num + n,
    })
  }
  render() {
    return (
      <>
        <div>App</div>
        {/* 通过子传父改变num值 */}
        <Son1 editNum={this.editNum}></Son1>
        {/* 父传子得到Son1的num 值 */}
        <Son2 num={this.state.num}></Son2>
      </>
    )
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
