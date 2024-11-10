import React from 'react'
import { useParams } from 'react-router-dom'
export default function Blog() {
  const param = useParams<{ id: string; name: string }>()
  console.log(param)
  return (
    <div>
      <h1>Blog - {param.id}</h1>
    </div>
  )
}
