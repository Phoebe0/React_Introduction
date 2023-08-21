import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
export default class App extends Component {
  // 挂载阶段，会经过三个钩子：constructor render componentDidMount
  constructor(props) {
    console.log(props)
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      a: 100,
      b: 50,
    }
    console.log('constructor')
  }
  handelChange = () => {
    this.setState({
      a: this.state.a + 1,
    })
    // this.state.b += 1
    // this.forceUpdate() // 强更新(强制DOM更新)
    // console.log(this.state.b)
  }
  render() {
    console.log('render')
    return (
      <>
        <div>
          {this.state.a} --- {this.state.b}
        </div>
        <button onClick={this.handelChange}>修改</button>
      </>
    )
  }
  componentDidMount() {
    // 【组件挂载完毕,目的是：发送请求；DOM操作】完成DOM渲染后触发
    console.log('componentDidMount')
  }
  componentDidUpdate() {
    // 【组件更新完毕，获取到更新后的DOM内容】完成DOM渲染后触发。
    console.log('componentDidUpdate')
  }
}

ReactDOM.createRoot(document.querySelector('#root')).render(
  <App num={100}></App>
)
