// 1. 导包
import React from "react"
import ReactDom from 'react-dom/client'
// 函数组件  没有状态  仅仅做一些数据展示的工作，可以使用函数组件
// function App() {
//   return (
//     <div>我是组件</div>
//   )
// }

// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  render() {
    return (
      <h1>我是类组件</h1>
    )
  }
}
const VNode = (
  <div>
    <App></App>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)