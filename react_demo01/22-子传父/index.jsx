import React, { Component } from 'react'
import ReactDom from 'react-dom/client'

// 子传父本质是父组件传递给子组件一个方法，子组件通过调这个方法来向父组件传参。
class AppSon extends Component {
  render() {
    return (
      <>
        <h2>我是App的儿子</h2>
        <span>{this.props.name}</span>
        <button onClick={() => this.props.editName(this.props.name)}>
          点击执行父组件的方法
        </button>
      </>
    )
  }
}
class App extends Component {
  state = {
    name: '冷面小青龙',
  }
  editName = (val) => {
    console.log(val)
    this.setState({
      name: val === '丹恒' ? '冷面小青龙' : '丹恒',
    })
  }
  /*   editName() {
    // 错误写法
    // 注意⚠️：这里不能用普通函数，因为this指向的问题，如果是普通函数那么谁调用this就指向谁。这个函数是被this.props调用的，所以this指向的是父组件传递过去的参数
    console.log(this)
  } */
  render() {
    return (
      <>
        <h1>我是App</h1>
        <AppSon name={this.state.name} editName={this.editName}></AppSon>
      </>
    )
  }
}
ReactDom.createRoot(document.querySelector('#root')).render(<App></App>)
