import React, { useRef } from 'react'

export default function App() {
  const imgRef = useRef<HTMLImageElement | null>(null)
  return (
    <div>
      <h1>TS项目根组件</h1>
      <img ref={imgRef} src="./images/cat.jpg" alt="cat" />
      {/* 操作DOM元素 - 点击按钮获取图片src属性值 */}
      <button
        onClick={() => {
          // 使用！操作符，表示当前imgRef.current一定有值，即img这个DOM一定存在
          console.log(imgRef.current!.src) // 非空断言操作符
        }}
      >
        获取src
      </button>
    </div>
  )
}
