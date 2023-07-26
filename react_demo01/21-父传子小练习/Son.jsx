import { Component } from 'react'

class Son extends Component {
  render() {
    const { name, age } = this.props
    return (
      <div className="child">
        <div className="info">
          <h4>仙名：{name}</h4>
          <h4>仙寿：{age}</h4>
        </div>
      </div>
    )
  }
}

export default Son
