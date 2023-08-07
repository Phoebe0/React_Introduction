import React, { Component } from 'react'
// 处理可变的类名
import classNames from 'classnames'
export default class List extends Component {
  render() {
    return (
      /* 评论列表 */
      <div className="comment-list">
        {/* 每一项评论 */}
        {this.props.list.map((item) => {
          return (
            <div key={item.id} className="list-item">
              <div className="user-face">
                <img className="user-head" src={item.avatar} alt="" />
              </div>
              <div className="comment">
                <div className="user">{item.author}</div>
                <p className="text">{item.comment}</p>
                <div className="info">
                  <span className="time">
                    {this.props.formatTime(item.time)}
                  </span>
                  <span
                    className={classNames('like', {
                      liked: item.attitude === 1,
                    })}
                    onClick={() =>
                      this.props.setAttitude(
                        item.id,
                        item.attitude === 1 ? 0 : 1
                      )
                    }
                  >
                    <i className="icon" />
                  </span>
                  <span
                    className={classNames('hate', {
                      hated: item.attitude === -1,
                    })}
                    onClick={() =>
                      this.props.setAttitude(
                        item.id,
                        item.attitude === -1 ? 0 : -1
                      )
                    }
                  >
                    <i className="icon" />
                  </span>
                  {/* 写成箭头函数目的是点击时就能触发 */}
                  <span
                    className="reply btn-hover"
                    onClick={() => this.props.subComment(item.id)}
                  >
                    删除
                  </span>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
