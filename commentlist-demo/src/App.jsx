import { Component, createRef } from 'react'
import dayjs from 'dayjs'

// 处理可变的类名
import classNames from 'classnames'

class App extends Component {
  // 设置ref
  textRef = createRef()
  // 格式化时间的处理函数
  formatTime = (time) => {
    return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
  }
  // 提供组件状态
  state = {
    // hot: 热度排序  time: 时间排序
    tabs: [
      {
        id: 1,
        name: '热度',
        type: 'hot',
      },
      {
        id: 2,
        name: '时间',
        type: 'time',
      },
    ],
    active: 'hot',
    list: [
      {
        id: 1,
        author: 'Lucy',
        comment: 'up大大好厉害，期待下个作品',
        time: new Date('2022-12-10 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 1,
        // 腾讯云存储桶里面的图片
        avatar:
          'https://avatar-1312548952.cos.ap-shanghai.myqcloud.com/19a4c26f880511ebb6edd017c2d2eca2.jpg',
      },
      {
        id: 2,
        author: 'Moily',
        comment: '哇，有点东西',
        time: new Date('2022-12-01 09:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: 0,
        avatar:
          'https://avatar-1312548952.cos.ap-shanghai.myqcloud.com/1d46e0944ed9446695f4cb01804d5fc9.jpg',
      },
      {
        id: 3,
        author: 'Tricia',
        comment: '这也太简单了吧😅',
        time: new Date('2022-11-11 10:09:00'),
        // 1: 点赞 0：无态度 -1:踩
        attitude: -1,
        avatar:
          'https://avatar-1312548952.cos.ap-shanghai.myqcloud.com/7f084dde2deb4ad28ed13605febcc7c2.png',
      },
    ],
    content: '', //多行文本域输入的内容
  }
  // 提供方法
  // 输入框输入内容实时同步给 content
  changeContent = (e) => {
    this.setState({
      content: e.target.value,
    })
  }

  // 发表按钮，将输入框内容添加到列表
  handleSubmit = () => {
    console.log(this.textRef.current)

    // 如果没输入内容，弹出提示框
    if (!this.state.content.trim()) {
      // 如果输入了空格，也要记得清空content
      this.setState({
        content: '',
      })
      // 自动获取焦点
      return this.textRef.current.focus()
    }
    // 向state中的list数组中新增一条内容
    this.setState({
      list: [
        {
          id: Date.now(),
          author: 'Tricia',
          comment: this.state.content,
          time: new Date(),
          // 1: 点赞 0：无态度 -1:踩
          attitude: 0,
          avatar:
            'https://avatar-1312548952.cos.ap-shanghai.myqcloud.com/7f084dde2deb4ad28ed13605febcc7c2.png',
        },
        ...this.state.list,
      ],
      // 清空content
      content: '',
    })
  }

  render() {
    // 解构赋值
    const { list, tabs, active, content } = this.state
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <div className="comment-head">
            <span>{list.length} 评论</span>
          </div>
          {/* 排序 */}
          <div className="tabs-order">
            <ul className="sort-container">
              {tabs.map((item) => {
                // 检查tabs中的type与active值是否匹配，如果匹配的话就选中状态
                return (
                  <li
                    key={item.id}
                    className={item.type === active ? 'on' : ''}
                  >
                    按{item.name}排序
                  </li>
                )
              })}
            </ul>
          </div>

          {/* 添加评论 */}
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
                value={content}
                onChange={this.changeContent}
                ref={this.textRef}
              />
              <button className="comment-submit" onClick={this.handleSubmit}>
                发表评论
              </button>
            </div>
            <div className="comment-emoji">
              <i className="face"></i>
              <span className="text">表情</span>
            </div>
          </div>

          {/* 评论列表 */}
          <div className="comment-list">
            {/* 每一项评论 */}
            {list.map((item) => {
              return (
                <div key={item.id} className="list-item">
                  <div className="user-face">
                    <img className="user-head" src={item.avatar} alt="" />
                  </div>
                  <div className="comment">
                    <div className="user">{item.author}</div>
                    <p className="text">{item.comment}</p>
                    <div className="info">
                      <span className="time">{this.formatTime(item.time)}</span>
                      <span
                        className={classNames('like', {
                          liked: item.attitude === 1,
                        })}
                      >
                        <i className="icon" />
                      </span>
                      <span
                        className={classNames('hate', {
                          hated: item.attitude === -1,
                        })}
                      >
                        <i className="icon" />
                      </span>
                      <span className="reply btn-hover">删除</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
}
export default App
