import React, { Component } from 'react'
import Son from './Son'
import Context from './Context/context'
const { Consumer } = Context
export default class Father extends Component {
  render() {
    return (
      <Consumer>
        {/* 接收state  需要将DOM放入插值中，并用箭头函数返回 */}
        {(obj) => (
          <div style={{ border: '2px solid #333', margin: '10px' }}>
            Father -- {obj.name}
            <Son></Son>
          </div>
        )}
      </Consumer>
    )
  }
}
