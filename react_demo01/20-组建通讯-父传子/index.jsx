/*
 * @Author: Tricia
 * @Date: 2022-08-16 16:26:51
 * @Description:修改状态
 */
// 1. 导包
import ReactDom from 'react-dom/client'
import Father from './Father'

const VNode = (
  <div>
    <Father></Father>
  </div>
)
ReactDom.createRoot(document.querySelector('#root')).render(VNode)
