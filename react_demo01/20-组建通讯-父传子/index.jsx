/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:父传子
 */
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 导入子组件
import Son from './Son'
// 定义一个父组件
class Father extends React.Component {
  // 父组件在state中提供数据
  state = {
    fName: '朗道',
  }
  render() {
    return (
      <>
        <div>
          <p>father</p>
          {/* 父组件数据通过子组件标签传递给子组件 */}
          <Son fName={this.state.fName}></Son>
        </div>
      </>
    )
  }
}
const VNode = (
  <div>
    <Father></Father>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
