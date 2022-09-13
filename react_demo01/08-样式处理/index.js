// 1. 导包
import ReactDom from 'react-dom/client'
// 2. 创建
// 控制类名
import './index.css'
const VNode = (
  <>
  {/* 行内样式 */}
    <div
      style={{
        width: '100px',
        height: '100px',
        backgroundColor: 'pink',
      }}
    ></div>
    {/* 类名 */}
    <div className="box title"></div>
  </>
)
// 3. 挂载
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
