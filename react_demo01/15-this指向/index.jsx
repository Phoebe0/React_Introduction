/*
 * @Author: 崔皓月
 * @Date: 2023-02-13 23:20:05
 * @Description:
 */
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  // 提供一些方法
  // handleClick(e) {
  //   console.log('handleClick: ', this, e)
  // }
  handleClick = (e) => {
    console.log('handleClick: ', this, e)
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        {/* this指向的是App组件 */}
        {/* 这并不是函数的调用，仅仅是做了一个赋值 onClick = this.handleClick */}
        {/* 解决方法
            1.写成成箭头函数,注意：e需要传下来      onClick={(e) => this.handleClick(e)}
            2. 使用bind将this修改    onClick={this.handleClick.bind(this)}
            3. 将handleClick改造成箭头函数
        */}
        <button onClick={this.handleClick}>按钮</button>
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
