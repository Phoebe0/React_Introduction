import { Component } from 'react'
class Son extends Component {
  render() {
    return (
      <>
        {/* 子组件通过this.props接收父组件传过来的数据并渲染 */}
        <p>Son ： {this.props.fName}</p>
      </>
    )
  }
}
export default Son
