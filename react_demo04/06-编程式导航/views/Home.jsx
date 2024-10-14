import React from 'react'
import { useHistory } from 'react-router-dom'

export default function Home() {
  const history = useHistory()
  console.log(history)
  return (
    <div>
      <p>Home</p>
      {/* 直接写地址名就好了 */}
      {/* push跳转后可以回退，因为有历史记录 */}
      <button onClick={() => history.push('about')}>登陆—push</button>
      {/* replace 跳转后不能回推，因为是about页面直接替换的首页 */}
      <button onClick={() => history.replace('about')}>登陆-replace</button>
    </div>
  )
}
