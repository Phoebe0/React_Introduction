import React, { Component } from 'react'
import Pt from 'prop-types'

export default class Son extends Component {
  // 被static修饰过的属性，只能被class访问，叫做静态成员
  // 使用props检验    类名.propTypes = {属性 ： Pt.类型}
  // 类型不匹配会报错【注意：只有在这里声明了类型才会对类型进行校验！！！】
  static propTypes = {
    list: Pt.array,
  }
  // 默认值处理    类名.defaultProps = {属性 ： 默认值}
  static defaultProps = {
    list: [0, 0, 0],
  }

  render() {
    return (
      <>
        <div>Son</div>
        <p>
          {this.props.list.map((item) => {
            return item
          })}
        </p>
      </>
    )
  }
}
