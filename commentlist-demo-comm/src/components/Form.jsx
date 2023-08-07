import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      /* 添加评论 */
      <div className="comment-send">
        <div className="user-face">
          <img
            className="user-head"
            src="https://avatar-1312548952.cos.ap-shanghai.myqcloud.com/7f084dde2deb4ad28ed13605febcc7c2.png"
            alt=""
          />
        </div>
        <div className="textarea-container">
          <textarea
            cols="80"
            rows="5"
            placeholder="请您发言💬"
            className="ipt-txt"
            value={this.props.content}
            onChange={(e) => this.props.changeContent(e)}
            ref={this.props.textRef}
          />
          <button
            className="comment-submit"
            onClick={() => this.props.handleSubmit()}
          >
            发表评论
          </button>
        </div>
        <div className="comment-emoji">
          <i className="face"></i>
          <span className="text">表情</span>
        </div>
      </div>
    )
  }
}
