/*
 * @Author: 崔皓月
 * @Date: 2023-02-13 21:07:59
 * @Description:
 */
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新
class App extends React.Component {
  // state节点中提供状态
  // 通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17,
  }
  // 提供方法
  handleClick(e) {
    console.log('点击qqq')
    console.log(e) // e是react合成的事件对象
    e.preventDefault() // 阻止默认行为
  }
  render() {
    return (
      <div>
        {/* 方法后面不加小括号，因为加了小括号表示函数就执行啦 */}
        <button onClick={this.handleClick}>按钮</button>
        <a href="www.baidu.com">百度一下</a>
      </div>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
