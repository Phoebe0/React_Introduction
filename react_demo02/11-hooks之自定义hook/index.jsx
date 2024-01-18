import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import Img from './my_img.png'

// 自定义封装Hooks,将重用的业务逻辑封装到一个函数中
// hook 只能在函数组件或者自定义hook中使用
function useMouseMove() {
  // 清理副作用案例 - 图像跟随鼠标移动
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

  return mouse
}

function App() {
  const mouse = useMouseMove()
  return (
    <>
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
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
