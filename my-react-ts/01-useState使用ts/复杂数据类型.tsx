import React, { useEffect, useState } from 'react'

interface ResType {
  id: number
  name: string
}

export default function App() {
  const [list, setList] = useState<ResType[]>([])
  // const [list, setList] = useState([] as ResType[])

  useEffect(() => {
    setList([{ id: 1, name: 'Tt' }])
  }, [])

  return (
    <div>
      <h1>TS项目根组件</h1>
      <ul>
        {list.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  )
}
