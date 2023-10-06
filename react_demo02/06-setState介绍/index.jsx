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
      // setState 是同步更新的，但是表现为延迟更新的状态【注意：并不是异步更新】
      // 如果多次调用setState更新状态，那么状态会合并，后面覆盖前面。（即：下面有三个count + 1,但是不会执行三次，只执行一次！）
      // 所有操作都执行完毕，React拿到最终状态，然后触发组件更新。
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    this.setState({
      count: this.state.count + 1,
    })
    console.log('后', this.state.count)
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
