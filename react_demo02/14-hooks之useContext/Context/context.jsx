// 公共组件：提供Provider, Consumer这两个组件

// 1. 导入createcontext方法
import { createContext } from 'react'
// 2. 调用方法得到两个组件 Provider, Consumer
const Context = createContext()
export default Context
