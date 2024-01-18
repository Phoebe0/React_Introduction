import React, { useState, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import axios from 'axios'
function App() {
  const [prdList, setPrdList] = useState([])
  useEffect(() => {
    async function fetchAPI() {
      // 发送请求  也是一个副作用
      const prdData = await axios
        .post('http://localhost:3301/api/SelectPrd')
        .then((response) => {
          // 设置数据
          setPrdList(response.data.data)
          return response.data.data
        })
        .catch((err) => {
          return err
        })
      console.log(prdData)
    }
    fetchAPI()
    return () => {}
  }, []) // 页面请求只发一次

  return (
    <>
      <div>
        <h1>app</h1>
        <ul>
          {prdList.map((item) => {
            return <li key={item.pid}>{item.pname}</li>
          })}
        </ul>
      </div>
    </>
  )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App></App>)
