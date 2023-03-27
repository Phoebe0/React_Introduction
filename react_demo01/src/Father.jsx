// 1. 导包
import { Component } from 'react'

import Child from './Child'

export default class Father extends Component {
  constructor(props) {
    super(props)
    // 父组件提供数据
    this.state = {
      data: 111,
    }
  }
  // 传递给子组件
  render() {
    return (
      <div>
        {/* 传递数据给子组件： */}
        <Child name={this.state.data} />
        <div>{this.state.data}</div>
      </div>
    )
  }
}
