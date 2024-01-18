import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Img from './my_img.png'
function App() {
  const [flag, setFlag] = useState(0)
  const clearImg = () => {
    setFlag(1)
    console.log(flag)
  }
  return (
    <>
      {flag === 1 ? <></> : <Clear></Clear>}
      <button onClick={clearImg}>清除图片跟随</button>
    </>
  )
}
// 清理副作用案例 - 图像跟随鼠标移动
function Clear() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  })
  // 移动鼠标时改变 x y 值
  const move = (e) => {
    // 注意：使用新值替换旧值
    setMouse({ x: e.pageX + 30, y: e.pageY + 30 })
  }
  useEffect(() => {
    window.addEventListener('mousemove', move)
    // 组件卸载时，移除事件
    return () => {
      console.log('移除副作用')
      window.removeEventListener('mousemove', move)
    }
  }, [])
  return (
    <>
      <div>
        <img
          src={Img}
          style={{
            position: 'absolute',
            left: mouse.x,
            top: mouse.y,
            backgroundColor: 'green',
          }}
          alt=""
        />
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
