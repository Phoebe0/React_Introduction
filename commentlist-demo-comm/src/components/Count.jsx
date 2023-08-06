import React, { Component } from 'react'

export default class Count extends Component {
  render() {
    return (
      <div className="comment-head">
        <span>{this.props.count} 评论</span>
      </div>
    )
  }
}
