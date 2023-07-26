import { Component } from 'react'
import Son from './Son'
import './base.scss'
export default class App extends Component {
  state = {
    list: [
      { id: 1, name: '李破山', age: 534 },
      { id: 2, name: '欧阳朱哥', age: 304 },
      { id: 3, name: '江小鱼', age: 1225 },
    ],
  }
  delAge = (id, val) => {
    console.log(val)
    // 为爱成魔，仙寿减少
    this.setState({
      // 先拿id找到要改是哪一个list的age
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            age: item.age - val.toFixed(0),
          }
        } else {
          return item
        }
      }),
    })
  }
  render() {
    return (
      <div className="parent">
        <h1>父组件</h1>
        {this.state.list.map((item) => {
          // 循环建立三个列表
          // {...item}使用展开运算符将每个对象的字段 挨个传递给子组件，相当于 name={item.name} age={item.age}
          return <Son key={item.id} {...item} delAge={this.delAge}></Son>
        })}
      </div>
    )
  }
}
