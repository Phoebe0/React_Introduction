/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import { Component } from 'react'
import ReactDom from 'react-dom/client'

// 函数组件通过props获取
function Hi(props) {
  return <div>{props.name}</div>
}
// 接收数据：
// class 组件需要通过 this.props 来获取
class Hello extends Component {
  render() {
    return <div>接收到的数据:{this.props.age}</div>
  }
}

const VNode = (
  <div>
    <Hello name="jack" age={19} />
    <Hi name={'Tricia'}></Hi>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
