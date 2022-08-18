import ReactDOM from 'react-dom/client'
import './index.css'
import dayjs from 'dayjs'
// 处理可变的类名
import classNames from 'classnames'

const formatTime = (time) => {
  return dayjs(time).format('YYYY-MM-DD HH:mm:ss')
}
const state = {
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
      author: '传智教育',
      comment: '好口碑IT培训机构,一样的教育,不一样的品质',
      time: new Date('2021-12-10 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 1,
      avatar: 'http://www.itcast.cn/2020gw/images/indeximg/logobot2.jpg',
    },
    {
      id: 2,
      author: '黑马程序员',
      comment: '键盘敲烂，月薪过万',
      time: new Date('2021-12-11 09:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: 0,
      avatar: 'http://www.itheima.com/images/logo.png',
    },
    {
      id: 3,
      author: '上海前端',
      comment: '月薪1万5，简简单单',
      time: new Date('2021-12-11 10:09:00'),
      // 1: 点赞 0：无态度 -1:踩
      attitude: -1,
      avatar: 'http://geek.itheima.net/images/user_head.jpg',
    },
  ],
}

const { list, tabs, active } = state

const element = (
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
              <li key={item.id} className={item.type === active ? 'on' : ''}>
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
            src="http://geek.itheima.net/images/user_head.jpg"
            alt=""
          />
        </div>
        <div className="textarea-container">
          <textarea
            cols="80"
            rows="5"
            placeholder="发条友善的评论"
            className="ipt-txt"
          />
          <button className="comment-submit">发表评论</button>
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
                  <span className="time">{formatTime(item.time)}</span>
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

ReactDOM.createRoot(document.querySelector('#root')).render(element)
