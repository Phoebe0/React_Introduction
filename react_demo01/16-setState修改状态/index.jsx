/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import React from 'react'
import ReactDom from 'react-dom/client'
// 类组件  有状态  如果有状态，状态需要切换，更新视图 用类组件
class App extends React.Component {
  state = {
    name: 'Tt',
    age: 18,
    boyfriend: [14, 17, 13, 16],
    like: {
      play: 10,
      study: 4,
    },
  }
  handleClick = () => {
    // 修改state中的数据，用this.setState({修改的数据})
    // 注意：不能直接改state中的数据
    this.setState({
      // 这里用 ++ 是无效的
      name: 'Tricia',
      age: this.state.age + 1,
      boyfriend: [...this.state.boyfriend, 21],
      like: { ...this.state.like, read: 8 },
    })
  }
  render() {
    console.log(this) //App组件
    return (
      <div>
        <button onClick={this.handleClick}>年纪++</button>
        <p>{this.state.name}</p>
        <p>{this.state.age}</p>
        <p>{this.state.boyfriend}</p>
        <p>{this.state.like.play}</p>
        <p>{this.state.like.study}</p>
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
