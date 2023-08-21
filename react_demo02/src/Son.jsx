import React, { Component } from 'react'
let timer = -1
export default class Son extends Component {
  constructor() {
    super()
    console.log(' Son子组件的constructor')

    timer = setInterval(() => {
      console.log('定时器执行')
    }, 1000)
  }
  render() {
    console.log('Son子组件的render')
    return <div>Son</div>
  }
  componentDidMount() {
    console.log('Son子组件的componentDidMount')
  }
  componentDidUpdate() {
    console.log('Son子组件的componentDidUpdate')
  }
  // 【组件卸载，执行一些清理工作】组件即将销毁的时候，要将全局的定时任务，全局变量，全局...等等销毁
  componentWillUnmount() {
    clearInterval(timer)
    console.log('Son子组件销毁了componentWillUnmount')
  }
}
