import React, { Component } from 'react'
import Father from './Father'
export default class GrandPa extends Component {
  render() {
    return (
      <div style={{ border: '2px solid #333', margin: '10px' }}>
        GrandPa
        <Father></Father>
      </div>
    )
  }
}
