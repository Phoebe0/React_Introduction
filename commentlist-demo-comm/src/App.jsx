import { Component, createRef } from 'react'
import dayjs from 'dayjs'

import Form from './components/Form'
import List from './components/List'
import Tabs from './components/Tabs'
import Count from './components/Count'
class App extends Component {
  // 设置文本域ref
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
    list: JSON.parse(localStorage.getItem('list')) || [],
    content: '', //多行文本域输入的内容
  }
  // --------- 提供方法-------------
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
    } else {
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
  }
  /**
   * 回调函数
   * @param {*} id 评论的唯一标识
   * @param {*} attitude 1: 点赞 0：无态度 -1:踩
   * @param {*} type tab栏状态
   */
  // 删除评论  根据评论id删除
  subComment = (id) => {
    console.log(id)
    this.setState({
      list: this.state.list.filter((item) => item.id !== id),
    })
  }

  // 赞与踩
  setAttitude = (id, attitude) => {
    console.log(id)
    this.setState({
      list: this.state.list.map((item) => {
        if (item.id === id) {
          return {
            ...item,
            attitude,
          }
        } else {
          return item
        }
      }),
    })
  }

  // tab栏切换
  setTab = (type) => {
    this.setState({
      // 高亮切换
      active: type,
      // 不同规则排序
      list:
        type === 'hot'
          ? this.state.list.sort((a, b) => a.id - b.id)
          : this.state.list.sort((a, b) => a.time - b.time),
    })
  }

  render() {
    // 解构赋值
    const { list, tabs, active, content } = this.state
    return (
      <div className="App">
        <div className="comment-container">
          {/* 评论数 */}
          <Count count={list.length}></Count>
          {/* 排序 */}
          <Tabs tabs={tabs} active={active} setTab={this.setTab}></Tabs>
          {/* 添加评论 */}
          <Form
            content={content}
            handleSubmit={this.handleSubmit}
            changeContent={this.changeContent}
            textRef={this.textRef}
          ></Form>
          {/* 评论列表 */}
          <List
            list={list}
            subComment={this.subComment}
            setAttitude={this.setAttitude}
            formatTime={this.formatTime}
          ></List>
        </div>
      </div>
    )
  }

  // 本地持久化处理  要在componentDidUpdate()这个钩子函数中执行
  componentDidUpdate() {
    localStorage.setItem('list', JSON.stringify(this.state.list))
  }
}
export default App
