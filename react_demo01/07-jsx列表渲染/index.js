// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
const list = [
  { id: 1, name: 'sh', age: 22 },
  { id: 2, name: 'zs', age: 18 },
  { id: 3, name: 'vf', age: 14 },
]

const VNode = (
  <div>
    <ul>
      {list.map((item) => {
        return (
          <li key={item.id}>
            <h3>姓名：{item.name}</h3>
            <h4>年龄：{item.age}</h4>
          </li>
        )
      })}
    </ul>
  </div>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
