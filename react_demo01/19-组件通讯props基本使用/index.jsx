/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import { Component } from 'react'
import ReactDom from 'react-dom/client'

// 非受控组件是通过ref配合获取到表单元素的值

/* 
  步骤：
    1. 导入creatRef，并创建一个ref对象。
    2. 和结构绑定
    3. 获取值

*/
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
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
