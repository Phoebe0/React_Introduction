import React, { Component } from 'react'

export default class Tabs extends Component {
  render() {
    return (
      /* 排序 */
      <div className="tabs-order">
        <ul className="sort-container">
          {this.props.tabs.map((item) => {
            // 检查tabs中的type与active值是否匹配，如果匹配的话就选中状态
            return (
              <li
                key={item.id}
                className={item.type === this.props.active ? 'on' : ''}
                onClick={() => this.props.setTab(item.type)}
              >
                按{item.name}排序
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}
