import React, { Component, createRef } from 'react'
import ReactDOM from 'react-dom/client'
export default class App extends Component {
  // 挂载阶段，会经过三个钩子：constructor render componentDidMount
  constructor() {
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      a: 100,
    }
    console.log('constructor')
  }
  // state ={
  // 这种方式是简写，完整写法如上
  //   a:10
  // }
  render() {
    // 【渲染阶段，目的是渲染UI】每次组建渲染都会触发，（注意⚠️ ：不能调用setState()原因是render是每次组件渲染时触发的，如果在里面凋setState()，则组件数据发生变化，肯定要重新渲染，但是重新渲染又会触发render。就会形成死循环！！！)
    console.log('render')
    return (
      <>
        <div>{this.state.a}</div>
        <Son a={this.state.a}></Son>
      </>
    )
  }
  componentDidMount() {
    // 【组建挂载完毕,目的是：发送请求；DOM操作】完成DOM渲染后触发
    console.log('componentDidMount')
  }
}
class Son extends Component {
  constructor(props) {
    // 【创建阶段，目的是创建数据】最先执行
    super()
    this.state = {
      b: props.a,
    }
    this.iptRef = createRef()
  }
  // iptRef = createRef()  // 建立ref的简写
  render() {
    return (
      <>
        hi :{this.state.b}
        <input type="text" ref={this.iptRef} />
      </>
    )
    // return <>hi :{this.props.a}</>  // props的简写
  }
}
ReactDOM.createRoot(document.querySelector('#root')).render(<App></App>)
