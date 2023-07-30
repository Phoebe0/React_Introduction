import React, { Component } from 'react'

export default class Son1 extends Component {
  render() {
    return (
      <div>
        Son1 <button onClick={() => this.props.editNum(10)}>传给我兄弟</button>
      </div>
    )
  }
}
