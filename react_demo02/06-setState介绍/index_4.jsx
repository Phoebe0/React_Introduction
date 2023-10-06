import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

export default class App extends Component {
  state = {
    count: 0,
  }
  // 只要在处理函数中调用setState方法后，不是直接执行，而是将setState操作放在一个React的任务队列中（同步）
  add = () => {
    console.log('前', this.state.count)
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    console.log('后', this.state.count)
    // 宏任务  17显示的是同步的
    setTimeout(() => {
      this.setState({
        count: this.state.count + 1,
      })
      this.setState({
        count: this.state.count + 1,
      })
      this.setState({
        count: this.state.count + 1,
      })
      console.log('定时器：', this.state.count)
    })
  }
  render() {
    return (
      <div>
        {this.state.count} <button onClick={this.add}>加1</button>
      </div>
    )
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
