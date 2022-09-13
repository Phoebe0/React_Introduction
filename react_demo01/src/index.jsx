// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // state节点中提供状态    通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17
  }
  // 提供一些方法
  handleClick(e) {
    console.log('点击')
    console.log(e)
    e.preventDefault() // 阻止浏览器默认行为
  }
  render() {
    return (
      <div>
        {/* this指向的是App组件 */}
        <button onClick={this.handleClick}>按钮</button>
        <a href="http://www.baidu.com" onClick={this.handleClick}>百度</a>
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