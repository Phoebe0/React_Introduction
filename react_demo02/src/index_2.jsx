import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'

export default class App extends Component {
  state = {
    count: 0,
  }
  // 只要在处理函数中调用setState方法后，不是直接执行，而是将setState操作放在一个React的任务队列中（同步）
  add = () => {
    // 推荐使用setstate(preState => {}) 语法
    // preState：上一个setState的结果(是一个对象)
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      }
    })
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      }
    })
    this.setState((preState) => {
      return {
        count: preState.count + 1,
      }
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
