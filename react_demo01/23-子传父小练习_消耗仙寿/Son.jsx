import { Component } from 'react'

class Son extends Component {
  render() {
    const { id, name, age, delAge } = this.props
    return (
      <div className="child">
        <div className="info">
          <h4>仙名：{name}</h4>
          <h4>仙寿：{age}</h4>
          <button onClick={() => delAge(id, Math.random() * 10)}>
            消耗仙寿
          </button>
        </div>
      </div>
    )
  }
}

export default Son
