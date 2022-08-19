// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 2.
class Hello extends React.Component {
  render() {
    return <h1>哈哈</h1>
  }
}
const VNode = (
  <>
    <Hello></Hello>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
