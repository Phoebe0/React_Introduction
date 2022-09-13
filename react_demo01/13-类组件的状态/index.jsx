// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // state节点中提供状态
  // 通过 this.state.xxx 来获取状态
  state = {
    name: 'Tt',
    age: 17
  }
  render() {
    return (
      <h1>{this.state.name} ----- {this.state.age}</h1>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)