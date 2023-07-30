import React, { Component } from 'react'
import Context from './Context/context'
const { Consumer } = Context
export default class Son extends Component {
  render() {
    return (
      <Consumer>
        {(obj) => (
          <div style={{ border: '2px solid #333', margin: '10px' }}>
            Son -- {obj.age}岁
            <button onClick={() => obj.editAge(5)}>增加➕</button>
          </div>
        )}
      </Consumer>
    )
  }
}
