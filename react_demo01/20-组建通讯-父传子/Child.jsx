import { Component } from 'react'
export default class Child extends Component {
  // 传递给子组件
  render() {
    return <>{this.props.money}</>
  }
}
