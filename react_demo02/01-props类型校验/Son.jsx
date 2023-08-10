import React, { Component } from 'react'
import Pt from 'prop-types'

export default class Son extends Component {
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
// 使用props检验    类名.propTypes = {属性 ： 类型}
// 类型不匹配会报错
Son.propTypes = {
  list: Pt.array,
}
