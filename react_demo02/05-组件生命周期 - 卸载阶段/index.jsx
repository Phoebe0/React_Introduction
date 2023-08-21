import React, { Component } from 'react'
import ReactDOM from 'react-dom/client'
import Son from './Son'
export default class App extends Component {
  // 挂载阶段，会经过三个钩子：constructor render componentDidMount
  constructor(props) {
    console.log(props)
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      flag: 1,
    }
    console.log('constructor')
  }

  render() {
    console.log('render')

    return (
      <>
        <button
          onClick={() => {
            this.setState({
              flag: this.state.flag - 1,
            })
          }}
        >
          flag变更
        </button>
        {this.state.flag === 1 ? <Son></Son> : <></>}
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
